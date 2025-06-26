import { useState } from "react";
import { BASE_URL } from "../config/config";

export const usePostMessage = () => {
  const [message, setMessage] = useState(null);

  async function submitDataValidationMessage(messageData) {
  

    const response = await fetch(`${BASE_URL}/api/message`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageData),
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
