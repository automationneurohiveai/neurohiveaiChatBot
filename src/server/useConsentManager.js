
import { useEffect } from "react";

export const useConsentManager = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://web.cmp.usercentrics.eu/ui/loader.js";
        script.setAttribute("data-settings-id", "rS03Sgf5Y0Vut3");
        script.async = true;
        script.onload = () => {
          console.log("✅ Скрипт завантажено");
      
          window.addEventListener("UC_UI_INITIALIZED", () => {
            console.log("UC_UI_INITIALIZED");
          });
        };
        document.head.appendChild(script);
      }, []);
      
};
