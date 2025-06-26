import "./App.css";
import "./global.css";
import { useUIContext } from "./Context/UIContext";
import Intro from "./commponents/intro/Intro";
import Success from "./commponents/success-modal/Success";
import { useEffect } from "react";
import { BASE_URL } from "./config/config";

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
      <div className="App min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Intro />
        </div>
      </div>

      {visible && <Success />}
    </>
  );
}

export default App;
