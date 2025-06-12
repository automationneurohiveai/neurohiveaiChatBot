import { useEffect } from "react";
import { BASE_URL } from "../config/config";

export const useConsentManager = () => {
  useEffect(() => {
    const initSession = async () => {
      try {
        const consents = await window.Usercentrics?.getConsents();

        const hasConsent = consents?.some(
          (c) => c.status === true && c.isEssential === false
        );

        if (hasConsent) {
          await fetch(`${BASE_URL}/init-session`, {
            method: "POST",
            credentials: "include",
          });
        } else {
          console.log("⛔️ Користувач не дав згоду — сесію не створено");
        }
      } catch (err) {
        console.error("❌ Не вдалося ініціалізувати сесію:", err);
      }
    };

    
    initSession();

 
    window.addEventListener("UC_CONSENT_CHANGED", initSession);

    return () => {
      window.removeEventListener("UC_CONSENT_CHANGED", initSession);
    };
  }, []);
};
