import { useState } from "react";
import { BASE_URL } from "../config/config";

export const usePostUrl = () => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submitDataValidationUrl(urlData) {
    setLoading(true);
    const res = await fetch(`${BASE_URL}/init-session`, {
      method: "GET",
      credentials: "include",
    });

    const { sessionId } = await res.json();
    console.log("sessionId Message", sessionId);

    const response = await fetch(`${BASE_URL}/api/urlai`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: urlData, sessionId: sessionId }),
    });

    const result = await response.json();
    console.log("Response from n8n:", result);
    setUrl(result);
    setLoading(false);
  }

  return {
    submitDataValidationUrl,
    loading,
    loadingUrl: loading, // Alias for compatibility
    dataUrl: url, // Alias for compatibility
    url,
  };
};
