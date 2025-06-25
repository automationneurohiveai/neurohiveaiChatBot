import "./App.css";
import "./global.css";
import { useUIContext } from "./Context/UIContext";
import Intro from "./commponents/intro/Intro";
import Success from "./commponents/success-modal/Success";
import { useConsentManager } from "./server/useConsentManager";

function App() {
  const { visible } = useUIContext();

  useConsentManager();
  
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
