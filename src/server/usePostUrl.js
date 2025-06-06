import { useState } from "react";

export const usePostUrl = () => {
  const [dataUrl, setDataUrl] = useState(null);
  const [loadingUrl, setLoadingUrl] = useState(false);
  async function submitDataUrl(url) {
    setLoadingUrl(true);
    const res = await fetch("http://localhost:4000/init-session", {
      method: "GET",
      credentials: "include",
    });

    const { sessionId } = await res.json();

    console.log("sessionId", sessionId);    

    const response = await fetch("http://localhost:4000/api/urlai", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: sessionId,
        link: url,
      }),
    });

    const result = await response.json();
    console.log("📥 Response from n8n:", result);
    setDataUrl(result);
    setLoadingUrl(false);
  }

  return { dataUrl, submitDataUrl, loadingUrl };
};
