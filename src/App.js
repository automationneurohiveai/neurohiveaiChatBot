import './App.css';
import './global.css';
import Header from './commponents/header/Header';
import Footer from './commponents/footer/Footer';
import Home from './pages/Home';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Route, Routes, useLocation } from 'react-router-dom';
import Consultation from './pages/Consultation';
import Success from './commponents/success-modal/Success';

function App() {

  const headerRef = useRef(null);
  const introRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Применяем GSAP анимацию только на главной странице
    if (location.pathname === '/') {
      gsap.fromTo(
        [headerRef.current, introRef.current],
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
      // На других страницах сразу показываем контент без анимации
      gsap.set([headerRef.current, introRef.current], { y: 0, opacity: 1 });
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
      <div className="header-parent" ref={headerRef} style={{ opacity: 0 }}>
        <Header />
      </div>
        <div ref={introRef} style={{ opacity: 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultation" element={<Consultation />} />
          </Routes>
        </div>
      <Footer />
      {/* <Success /> */}
    </div>
  );
}

export default App;
