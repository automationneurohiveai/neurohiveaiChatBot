import "./App.css";
import "./global.css";
import { useUIContext } from "./Context/UIContext";
import Intro from "./commponents/intro/Intro";
import Success from "./commponents/success-modal/Success";
import { useEffect } from "react";
import { BASE_URL } from "./config/config";
import { useParams, Routes, Route } from "react-router-dom";

function App() {
  const { visible } = useUIContext();
  
  useEffect(() => {
    (async()=>{
       const res = await fetch(`${BASE_URL}/init-session`, {
         method: "POST",
         credentials: "include",
       });
       console.log("dfgsdgdfgdfgdfg",res);
    })()  
   }, []);
  
  return (
    <>
      <Routes>
        {/* Route without language parameter (defaults to English) */}
        <Route path="/" element={<IntroPage />} />
        {/* Route with language parameter */}
        <Route path="/:lang" element={<IntroPage />} />
      </Routes>

      {visible && <Success />}
    </>
  );
}

function IntroPage() {
  const {lang} = useParams();
  
  // Normalize language - support en, uk, pl with en as default
  const normalizedLang = ['en', 'uk', 'pl'].includes(lang) ? lang : 'en';
  
  return (
    <div className="App min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <Intro lang={normalizedLang}/>
      </div>
    </div>
  );
}

export default App;
