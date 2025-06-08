import { useState } from "react";

export const usePostContactForm = () => {
  const [data, setData] = useState(null);

  async function submitDataValidation(fullContactFormData) {
    const res = await fetch("http://localhost:4000/init-session", {
      method: "GET",
      credentials: "include",
    });

    const { sessionId } = await res.json();
    console.log("sessionId Message", sessionId);

    const response = await fetch("http://localhost:4000/api/contact-form", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fullContactFormData),
    });

    const result = await response.json();
    console.log("Response from n8n:", result);
    setData(result);
  }

  return { submitDataValidation };
};
