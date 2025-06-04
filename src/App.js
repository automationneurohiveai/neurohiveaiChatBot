import './App.css';
import './global.css';
import Header from './commponents/header/Header';
import Intro from './commponents/intro/Intro';
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


  return (
    <div className="App">
      <main className='relative'>
        <div className='header-parent'>
          <Header />
        </div>
        <div className='flex flex-col gap-[150px]'>
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
