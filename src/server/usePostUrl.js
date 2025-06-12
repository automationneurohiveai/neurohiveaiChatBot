import { useState } from "react";
import { BASE_URL } from "../config/config";

export const usePostUrl = () => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submitDataValidationUrl(urlData) {
    setLoading(true);

    // 🔄 Перевірка статусу — тепер sessionId не передаємо
    const checkStatus = async () => {
      try {
        const statusResponse = await fetch(`${BASE_URL}/api/status`, {
          method: "GET",
          credentials: "include",
        });
        const statusResult = await statusResponse.json();
        console.log("Status check result:", statusResult);
        return statusResult;
      } catch (err) {
        console.error("Error checking status:", err);
        return { status: "error" };
      }
    };

    const initialStatus = await checkStatus();

    if (initialStatus.status === "true") {
      console.log("Status is true, finishing immediately");
      setUrl(initialStatus);
      setLoading(false);
      return;
    }

    if (initialStatus.status !== "nok") {
      console.log("Status is not 'nok', finishing without sending data");
      setLoading(false);
      return;
    }

    try {
      // 📨 Тепер просто відправляємо urlData — sessionId вже є в cookie
      const response = await fetch(`${BASE_URL}/api/urlai`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlData }),
      });

      const result = await response.json();
      console.log("Response from api/urlai:", result);

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

        console.log("Status still not ready, will check again in 1 minute");
        setTimeout(pollStatus, 60000);
      };

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
    loadingUrl: loading,
    dataUrl: url,
    url,
  };
};
