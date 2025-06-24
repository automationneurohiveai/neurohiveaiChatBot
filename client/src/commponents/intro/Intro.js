import "./Intro.css";
import { AnimatePresence } from "framer-motion";

// Новые компоненты
import { useIntroFlow } from "./hooks/useIntroFlow";
import IntroForm from "./components/IntroForm";
import IntroContainer from "./components/IntroContainer";
import IntroLoading from "../IntroLoading/IntroLoading";
import ChatInfo from "../ChatInfo/ChatInfo";

export default function Intro() {
  // Используем наш custom hook для всей логики
  const {
    currentState,
    completedTasks,
    isUrlValid,
    tasks,
    STATES,
    handleSubmit,
    handleUrlChange,
  } = useIntroFlow();

  // Рендерим контент в зависимости от состояния
  const renderContent = () => {
    switch (currentState) {
      case STATES.IDLE:
        return (
          <IntroContainer state="idle">
            <IntroForm
              onSubmit={handleSubmit}
              isUrlValid={isUrlValid}
              onUrlChange={handleUrlChange}
            />
          </IntroContainer>
        );

      case STATES.ANALYZING:
        return (
          <IntroContainer state="analyzing">
            <IntroLoading completedTasks={completedTasks} tasks={tasks} />
          </IntroContainer>
        );

      case STATES.CHAT_READY:
        return (
          <IntroContainer state="chat_ready">
            <ChatInfo />
          </IntroContainer>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="intro-chatbot-only w-full flex flex-col justify-center items-center min-h-screen"
      id="intro"
    >
      {/* Dynamic Content with Animations */}
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </section>
  );
}
