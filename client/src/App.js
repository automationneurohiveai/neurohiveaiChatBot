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
  const [lang, setLang] = useState('en');

  const [data, setData] = useState(null);
  useEffect(() => {

    const handleMessage = (event) => {

      console.log("before",event.origin !== 'https://neurohiveai.agency');
      if (event.origin !== 'https://neurohiveai.agency') {
        return;
      }
      console.log("after",event.origin !== 'https://neurohiveai.agency');


      const parseData = JSON.parse(event.data);


       console.log("parseData", parseData);
      
    
      if (parseData.type === "set-language" && ['en', 'uk', 'pl'].includes(parseData.lang)) {
        setLang(parseData.lang);

      
        console.log("parseData.lang", parseData.lang);
      }
    };




    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const normalizedLang = ['en', 'uk', 'pl'].includes(lang) ? lang : 'en';






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
          <Intro lang={normalizedLang}/>
        </div>
      </div>

      {visible && <Success />}
    </>
  );
}

export default App;





