import { useState } from "react";
import { BASE_URL } from "../config/config";

export const usePostEmailFooter = () => {
  const [email, setEmail] = useState(null);

  async function submitDataValidationEmail(emailFooterData) {
  
    const response = await fetch(`${BASE_URL}/api/email-footer`, {
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
