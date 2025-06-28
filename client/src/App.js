import "./App.css";
import "./global.css";
import { useUIContext } from "./Context/UIContext";
import Intro from "./commponents/intro/Intro";
import Success from "./commponents/success-modal/Success";
import { useEffect, useState } from "react";
import { BASE_URL } from "./config/config";
import { useSearchParams } from "react-router-dom";

function App() {
  const { visible } = useUIContext();
  const [searchParams] = useSearchParams();

  // Отримуємо значення параметра lang з URL
  const lang = searchParams.get("lang") || "en"; // fallback до "en"

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/init-session`, {
        method: "POST",
        credentials: "include",
      });
      console.log("Session started", res);
    })();
  }, []);
  
  return (
    <>
      <div className="App min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Intro lang={lang} />
        </div>
      </div>

      {visible && <Success />}
    </>
  );
}

export default App;
