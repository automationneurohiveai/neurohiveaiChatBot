import { useState } from "react";

export const usePostMessage = () => {
  const [data, setData] = useState(null);

  async function submitData(messageText) {
    const res = await fetch("http://localhost:4000/init-session", {
      method: "GET",
      credentials: "include",
    });

    const { sessionId } = await res.json();

    const response = await fetch("http://localhost:4000/api/message", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: sessionId,
        body: messageText,
      }),
    });

    const result = await response.json();
    console.log("📥 Response from n8n:", result);
    setData(result);
  }

  return { data, submitData };
};
