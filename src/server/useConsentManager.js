import { useEffect } from "react";

export const useConsentManager = () => {
  useEffect(() => {
    const existingScript = document.getElementById("usercentrics-cmp");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "usercentrics-cmp";
    script.src = "https://web.cmp.usercentrics.eu/ui/loader.js";
    script.dataset.settingsId = "rS03Sgf5Y0Vut3"; // заміни на свій ID
    script.async = true;
    document.head.appendChild(script);

    const handleConsertReady = async() => {
        const services = window?.UC_UI?.getServicesBaseInfo?.() || [];
        const hasFunctionalConsent = services.some(
            (s) => s.categorySlug === "functional" && s.isEnabled
        );

        if (hasFunctionalConsent) {
         try{
            const res = await fetch("https://back-655730749536.europe-west1.run.app/init-session", {
                method: "GET",
                credentials: "include",
            })
            const data = await res.json();
            console.log("Session ID:", data.sessionId);
            console.log("Сесія створена");
         }catch(e){
            console.error("Помилка створення сесії", e);
         }
        
        }
    }

    window.addEventListener("UC_UI_INITIALIZED", handleConsertReady);
    return () => {
        window.removeEventListener("UC_UI_INITIALIZED", handleConsertReady);
    }
  }, []);
};
