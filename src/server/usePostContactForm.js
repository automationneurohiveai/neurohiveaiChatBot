import { useState } from "react";
import { BASE_URL } from "../config/config";

export const usePostContactForm = () => {
  const [data, setData] = useState(null);

  async function submitDataValidationContactForm(contactFormData) {
    const response = await fetch(`${BASE_URL}/api/contact-form`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactFormData),
    });

    const result = await response.json();
    console.log("Response from n8n:", result);
    setData(result);
  }

  return { submitDataValidationContactForm };
};
