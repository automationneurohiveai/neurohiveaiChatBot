import { useState } from "react";

export const usePostEmailFooter = () => {
  const [email, setEmail] = useState(null);

  async function submitDataValidationEmail(emailFooterData) {
    const res = await fetch("http://localhost:4000/init-session", {
      method: "GET",
      credentials: "include",
    });

    const { sessionId } = await res.json();
    console.log("sessionId Message", sessionId);

    const response = await fetch("http://localhost:4000/api/email-footer", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailFooterData),
    });

    const result = await response.json();
    console.log("Response from n8n:", result);
    setEmail(result);
  }

  return { submitDataValidationEmail };
};
