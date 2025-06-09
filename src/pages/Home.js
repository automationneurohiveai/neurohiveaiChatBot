import About from "../commponents/about-ai-agent/About";
import Autamatation from "../commponents/automatation/Autamatation";
import Cases from "../commponents/cases/Cases";
import ChatInfo from "../commponents/ChatInfo/ChatInfo";
import Intro from "../commponents/intro/Intro";
import Methodology from "../commponents/methodology/Methodology";
import News from "../commponents/news/News";
import Question from "../commponents/question/Question";
import Review from "../commponents/reviews/Review";
import Strategy from "../commponents/strategy-guide/Strategy";
import Team from "../commponents/team/Team";
import Template from "../commponents/templates/Template";
import Tools from "../commponents/tools/Tools";
import { ScrollAnimationWrapper } from "../commponents/useScrollAnimation";

export default function Home() {
  return (
    <div className="flex flex-col gap-[150px] mob:gap-[120px]">
      <Intro />

      <ScrollAnimationWrapper animationType="fadeUp" delay={0}>
        <About />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="slideInLeft" delay={100}>
        <Autamatation />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="fadeUp" delay={0}>
        <Methodology />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="cardEntrance" delay={150}>
        <Cases />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="slideInRight" delay={100}>
        <Template />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="fadeUp" delay={0}>
        <Team />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="fadeIn" delay={200}>
        <Review />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="slideInLeft" delay={100}>
        <Tools />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="cardEntrance" delay={150}>
        <News />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animationType="textReveal" delay={0}>
        <Question />
      </ScrollAnimationWrapper>

      <Strategy />
    </div>
  );
}
