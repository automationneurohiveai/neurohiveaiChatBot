import { useState, useEffect, useReducer, useRef } from "react";
import { usePostUrl } from "../../../server/usePostUrl";
import { getTranslation } from "../translations";

// Определяем возможные состояния
const INTRO_STATES = {
  IDLE: "idle",
  ANALYZING: "analyzing",
  CHAT_READY: "chat_ready",
};

// Reducer для управления состояниями
const introReducer = (state, action) => {
  switch (action.type) {
    case "START_ANALYSIS":
      return {
        ...state,
        currentState: INTRO_STATES.ANALYZING,
        completedTasks: 0,
      };
    case "UPDATE_PROGRESS":
      return {
        ...state,
        completedTasks:
          typeof action.payload === "function"
            ? action.payload(state.completedTasks)
            : action.payload,
      };
    case "ANALYSIS_COMPLETE":
      return {
        ...state,
        currentState: INTRO_STATES.CHAT_READY,
        completedTasks: 5,
      };
    case "RESET":
      return {
        ...state,
        currentState: INTRO_STATES.IDLE,
        completedTasks: 0,
      };
    default:
      return state;
  }
};

const initialState = {
  currentState: INTRO_STATES.IDLE,
  completedTasks: 0,
};

export const useIntroFlow = (lang = 'en') => {
  const [state, dispatch] = useReducer(introReducer, initialState);
  const [isUrlValid, setIsUrlValid] = useState(false);
  const { dataUrl, submitDataValidationUrl, loadingUrl } = usePostUrl();
  const timeoutRef = useRef(null);

  const tasks = getTranslation(lang, 'tasks');

  // Валидация URL
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Обработка отправки формы
  const handleSubmit = async (url) => {
    if (!isUrlValid) return;

    // Add timeout delay before showing loading
    timeoutRef.current = setTimeout(() => {
      dispatch({ type: "START_ANALYSIS" });
    }, 2000);

    const data = {
      url: url,
      lang: lang || "en"  
    } 



    await submitDataValidationUrl(data);


    
  };

  // Валидация URL при изменении
  const handleUrlChange = (url) => {
    const hasValidUrl = url.trim() !== "" && isValidUrl(url.trim());
    setIsUrlValid(hasValidUrl);
  };

  // Эффект для обновления прогресса
  useEffect(() => {
    if (loadingUrl && state.currentState === INTRO_STATES.ANALYZING) {
      const interval = setInterval(() => {
        dispatch({
          type: "UPDATE_PROGRESS",
          payload: (prev) => Math.min(prev + 1, 4),
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [loadingUrl, state.currentState]);

  // Эффект для завершения анализа
  useEffect(() => {
    if (dataUrl && state.completedTasks === 4) {
      setTimeout(() => {
        dispatch({ type: "ANALYSIS_COMPLETE" });
      }, 1000);
    }
  }, [dataUrl, state.completedTasks]);

  // Эффект для мгновенного завершения, когда данные уже готовы
  useEffect(() => {
    if (dataUrl && !loadingUrl && state.currentState === INTRO_STATES.IDLE) {
      // Если получили данные без загрузки (статус был "true"), сразу переходим к чату
      console.log("Data ready immediately, completing analysis");
      // Очищаем timeout, чтобы не запускать анализ
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      dispatch({ type: "ANALYSIS_COMPLETE" });
    }
  }, [dataUrl, loadingUrl, state.currentState]);

  return {
    // Состояния
    currentState: state.currentState,
    completedTasks: state.completedTasks,
    isUrlValid,
    loadingUrl,
    tasks,
    STATES: INTRO_STATES,

    // Методы
    handleSubmit,
    handleUrlChange,
    isValidUrl,
    reset: () => dispatch({ type: "RESET" }),
  };
};
