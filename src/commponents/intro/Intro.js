import "./Intro.css";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Новые компоненты
import { useIntroFlow } from "./hooks/useIntroFlow";
import IntroForm from "./components/IntroForm";
import IntroContainer from "./components/IntroContainer";
import IntroLoading from "../IntroLoading/IntroLoading";
import ChatInfo from "../ChatInfo/ChatInfo";

export default function Intro() {
  const navigate = useNavigate();

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
      className="intro w-full flex flex-col justify-center items-center"
      id="intro"
    >
      {/* Header Section */}
      <div className="intro-header">
        <h1 className="title-1 text-center">
          AI automation that works for you
        </h1>
        <h2 className="subtitle-cover">
          Boost your team's productivity by 40% with AI automation
        </h2>

        {/* Action Buttons */}
        <div className="flex items-center mt-[35px] gap-[20px] justify-center">
          <button
            className="black-btn py-[16px] px-[48px] min-w-[400px]"
            onClick={() => navigate("/consultation")}
          >
            Get a consultation
          </button>
        </div>

        <span className="text-[#818181] txt-2 mt-[15px] flex justify-center">
          No setup required. Get started in 60 seconds.
        </span>
      </div>

      {/* Dynamic Content with Animations */}
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </section>
  );
}
