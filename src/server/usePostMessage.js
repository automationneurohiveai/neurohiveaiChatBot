import { useState } from "react";
import { BASE_URL } from "../config/config";

export const usePostMessage = () => {
  const [message, setMessage] = useState(null);

  async function submitDataValidationMessage(messageData) {
    const res = await fetch(`${BASE_URL}/init-session`, {
      method: "GET",
      credentials: "include",
    });

    const { sessionId } = await res.json();
    console.log("sessionId Message", sessionId);

    // Добавляем sessionId к данным сообщения
    const dataWithSession = {
      ...messageData,
      sessionId: sessionId
    };

    const response = await fetch(`${BASE_URL}/api/message`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataWithSession),
    });

    const result = await response.json();
    console.log("Response from n8n:", result);
    setMessage(result);
  }

  return { 
    submitDataValidationMessage,
    message // Экспортируем message для совместимости  
  };
};
