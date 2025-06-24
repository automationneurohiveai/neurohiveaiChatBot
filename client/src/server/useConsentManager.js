import { useEffect } from "react";
import { BASE_URL } from "../config/config";

export const useConsentManager = () => {
  useEffect(() => {
   (async()=>{
      const res = await fetch(`${BASE_URL}/init-session`, {
        method: "POST",
        credentials: "include",
      });
      console.log(res);
   })()  
  }, []);
};
