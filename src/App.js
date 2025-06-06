import './App.css';
import './global.css';
import Header from './commponents/header/Header';
import Footer from './commponents/footer/Footer';
import Home from './pages/Home';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Route, Routes } from 'react-router-dom';
import Consultation from './pages/Consultation';
import Success from './commponents/success-modal/Success';

function App() {

  const headerRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headerRef.current, introRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
      }
    );
  }, []);

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
      <main className="relative">
        <div className="header-parent" ref={headerRef} style={{ opacity: 0 }}>
          <Header />
        </div>
        <div ref={introRef} style={{ opacity: 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultation" element={<Consultation />} />
          </Routes>
        </div>
      </main>
      <Footer />
      {/* <Success /> */}
    </div>
  );
}

export default App;
