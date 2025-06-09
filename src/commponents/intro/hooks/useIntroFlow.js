import { useState, useEffect, useReducer } from "react";
import { usePostUrl } from "../../../server/usePostUrl";

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

export const useIntroFlow = () => {
  const [state, dispatch] = useReducer(introReducer, initialState);
  const [isUrlValid, setIsUrlValid] = useState(false);
  const { dataUrl, submitDataValidationUrl, loadingUrl } = usePostUrl();

  const tasks = [
    "Scanning pages and structure",
    "Detecting key call-to-actions",
    "Understanding user journeys",
    "Learning your tone of voice",
    "Preparing to become your assistant",
  ];

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
    setTimeout(() => {
      dispatch({ type: "START_ANALYSIS" });
    }, 2000);  // 1000 * 60 * 5)  5 min delay after click

    await submitDataValidationUrl(url);
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
