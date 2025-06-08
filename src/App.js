import "./App.css";
import "./global.css";
import Header from "./commponents/header/Header";
import Footer from "./commponents/footer/Footer";
import Home from "./pages/Home";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Route, Routes, useLocation } from "react-router-dom";
import Consultation from "./pages/Consultation";
import Success from "./commponents/success-modal/Success";
import { useUIContext } from "./Context/UIContext";

function App() {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const location = useLocation();

  const { visible, setVisible } = useUIContext();

  useEffect(() => {
    const target = [headerRef.current, introRef.current].filter(Boolean);
    if (location.pathname === "/") {
      gsap?.fromTo(
        target,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
        }
      );
    } else {
      gsap.set(target, { y: 0, opacity: 1 });
    }
  }, [location.pathname]);

  useEffect(() => {
    fetch("http://localhost:4000/init-session", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Session ID:", data.sessionId);
      });
  }, []);

  return (
    <div className="App">
      {!visible && (
        <div className="header-parent" ref={headerRef} style={{ opacity: 0 }}>
          <Header />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div ref={introRef} style={{ opacity: 0 }}>
              <Home />
            </div>
          }
        />

        <Route path="consultation" element={<Consultation />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
