import './App.css';
import './global.css';
import Header from './commponents/header/Header';
import Intro from './commponents/intro/Intro';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import About from './commponents/about-ai-agent/About';
import Autamatation from './commponents/automatation/Autamatation';
import Footer from './commponents/footer/Footer';
import Strategy from './commponents/strategy-guide/Strategy';
import Question from './commponents/question/Question';
import Methodology from './commponents/methodology/Methodology';
import Cases from './commponents/cases/Cases';
import Template from './commponents/templates/Template';
import Team from './commponents/team/Team';
import News from './commponents/news/News';
import Review from './commponents/reviews/Review';
import Tools from './commponents/tools/Tools';

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

  return (
    <div className="App">
      <main className='relative'>
        <div className='header-parent' ref={headerRef} style={{ opacity: 0 }}>
          <Header />
        </div>
        <div ref={introRef} style={{ opacity: 0 }} className='flex flex-col gap-[150px] mob:gap-[120px]'>
          <Intro />
          <About />
          <Autamatation />
          <Methodology />
          <Cases />
          <Template />
          <Team />
          <Review />
          <Tools />
          <News />
          <Question />
          <Strategy />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
