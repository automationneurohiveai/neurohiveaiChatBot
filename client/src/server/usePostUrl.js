import { useState } from "react";
import { BASE_URL } from "../config/config";

export const usePostUrl = () => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submitDataValidationUrl(urlData) {
    setLoading(true);
   



    console.log("UrlDataMainsdfgsdfsd", urlData);

    // Функция для проверки статуса
    const checkStatus = async () => {
      try {
        const statusResponse = await fetch(`${BASE_URL}/api/status`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        const statusResult = await statusResponse.json();
        console.log("Status check result:", statusResult);
        return statusResult;
      } catch (err) {
        console.error("Error checking status:", err);
        return { status: "error" };
      }
    };

    // Первоначальная проверка статуса
    const initialStatus = await checkStatus();
    
  


    try {
      const response = await fetch(`${BASE_URL}/api/urlai`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlData}),
      });

      const result = await response.json();
      console.log("Response from api/urlai:", result);

      // После отправки данных начинаем циклическую проверку
      let attempts = 0;
      const maxAttempts = 10;
      
      const pollStatus = async () => {
        if (attempts >= maxAttempts) {
          console.log("Max attempts reached, stopping polling");
          setLoading(false);
          return;
        }
        
        attempts++;
        console.log(`Status check attempt ${attempts}/${maxAttempts}`);
        
        const statusCheck = await checkStatus();
        
        if (statusCheck.status === "true") {
          console.log("Status became true, finishing");
          setUrl(statusCheck);
          setLoading(false);
          return;
        }
        
        // Если статус не true, продолжаем проверку
        console.log("Status still not ready, will check again in 1 minute");
        setTimeout(pollStatus, 60000); // Проверяем через минуту
      };
      
      // Начинаем первую проверку через минуту
      console.log("Starting status polling in 1 minute");
      setTimeout(pollStatus, 60000);
      
    } catch (err) {
      console.error("Error sending to api/urlai:", err);
      setLoading(false);
    }
  }

  return {
    submitDataValidationUrl,
    loading,
    loadingUrl: loading, // Alias for compatibility
    dataUrl: url, // Alias for compatibility
    url,
  };
};
