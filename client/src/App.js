import "./App.css";
import "./global.css";
import { useUIContext } from "./Context/UIContext";
import Intro from "./commponents/intro/Intro";
import Success from "./commponents/success-modal/Success";
import { useEffect } from "react";
import { BASE_URL } from "./config/config";
import { useSearchParams } from "react-router-dom";

function App() {
  const { visible } = useUIContext();
  const [searchParams] = useSearchParams();
  
  // Get language from URL query parameter (?lang=en)
  const langParam = searchParams.get('lang');
  
  // Normalize language - support en, uk, pl with en as default
  const normalizedLang = ['en', 'uk', 'pl'].includes(langParam) ? langParam : 'en';
  
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
      <div className="App min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Intro lang={normalizedLang}/>
        </div>
      </div>

      {visible && <Success />}
    </>
  );
}

export default App;
