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
import Cases from "./pages/Cases";
import Articles from "./pages/Articles";
import Faqs from "./pages/Faqs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import CompanyInfo from "./pages/CompanyInfo";
import { useConsentManager } from "./server/useConsentManager";

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

  // useEffect(() => { cookies
  //   fetch("https://back-655730749536.europe-west1.run.app/init-session", {
  //     method: "GET",
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Session ID:", data.sessionId);
  //     });
  // }, []);


  useConsentManager()





  return (
    <>
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
          <Route
            path="/consultation"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <Consultation />
              </div>
            }
          />
          <Route
            path="/cases"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <Cases />
              </div>
            }
          />
          <Route
            path="/articles"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <Articles />
              </div>
            }
          />
          <Route
            path="/faq"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <Faqs />
              </div>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <PrivacyPolicy />
              </div>
            }
          />
          <Route
            path="/cookie-policy"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <CookiePolicy />
              </div>
            }
          />
          <Route
            path="/terms"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <Terms />
              </div>
            }
          />
          <Route
            path="/company-info"
            element={
              <div ref={introRef} style={{ opacity: 0 }}>
                <CompanyInfo />
              </div>
            }
          />

          
        </Routes>

        <Footer />
      </div>

     
      {visible && <Success />}
    </>
  );
}

export default App;
