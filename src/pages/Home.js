import About from "../commponents/about-ai-agent/About";
import Autamatation from "../commponents/automatation/Autamatation";
import Cases from "../commponents/cases/Cases";
import Intro from "../commponents/intro/Intro";
import Methodology from "../commponents/methodology/Methodology";
import News from "../commponents/news/News";
import Question from "../commponents/question/Question";
import Review from "../commponents/reviews/Review";
import Strategy from "../commponents/strategy-guide/Strategy";
import Team from "../commponents/team/Team";
import Template from "../commponents/templates/Template";
import Tools from "../commponents/tools/Tools";

export default function Home() {
    return (
        <div className="flex flex-col gap-[150px] mob:gap-[120px]">
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
    )
}