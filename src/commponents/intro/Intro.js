import "./Intro.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroLoading from "../IntroLoading/IntroLoading";
import ChatInfo from "../ChatInfo/ChatInfo";

export default function Intro() {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showChatInfo, setShowChatInfo] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);

  const tasks = [
    "Scanning pages and structure",
    "Detecting key call-to-actions",
    "Understanding user journeys",
    "Learning your tone of voice",
    "Preparing to become your assistant",
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleStartAnalysis = () => {
    if (isActive) {
      setShowLoading(true);
      setCompletedTasks(0); // Reset tasks when starting
      setShowChatInfo(false); // Reset chat info when starting new analysis
    }
  };

  useEffect(() => {
    const hasValidUrl =
      inputValue.trim() !== "" && isValidUrl(inputValue.trim());

    if (hasValidUrl) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
    }
  }, [inputValue]);

  // Progressive task completion when loading
  useEffect(() => {
    if (showLoading) {
      const interval = setInterval(() => {
        setCompletedTasks((prev) => {
          if (prev < tasks.length) {
            return prev + 1;
          } else {
            // All tasks completed, show ChatInfo after a delay
            setTimeout(() => {
              setShowLoading(false);
              setShowChatInfo(true);
            }, 1000);
            return prev;
          }
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [showLoading, tasks.length]);

  return (
    <section
      className="intro w-full flex flex-col justify-center items-center"
      id="intro"
    >
      <h1 className="title-1 text-center">AI automation that works for you</h1>
      <h2 className="subtitle-cover">
        Boost your team's productivity by 40% with AI automation
      </h2>
      <div className="flex items-center mt-[35px] gap-[20px]">
        <button className="black-btn py-[16px] px-[48px]">
          Get a consultation
        </button>
        <button className="white-btn py-[16px] px-[66.5px]">
          Try the demo
        </button>
      </div>
      <span className="text-[#818181] txt-2 mt-[15px]">
        No setup required. Get started in 60 seconds.
      </span>

      <div className="w-[711px] p-[40px] bg-[#F7F7F7] rounded-[10px] flex flex-col items-center mt-[98px] shadow-lg">
        <AnimatePresence mode="wait">
          {!showLoading && !showChatInfo ? (
            <motion.div
              key="intro-content"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: -20,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex flex-col items-center"
            >
              <div className="relative mb-[10px]">
                <img
                  src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
                  alt="ball"
                  className="object-cover w-[115px]"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/image/intro/intro-gif-shadow.svg`}
                  className="absolute bottom-[-40px]"
                />
              </div>

              <h2 className="title-2 max-w-[460px]">Meet your AI Agent</h2>
              <p className="text-[#818181] max-w-[400px] text-center mt-[15px]">
                Your AI Agent is more than a tool — it's a team member. It
                learns your processes, talks to clients, and executes tasks — so
                you can focus on what really matters.
              </p>
              <p className="text-[#818181] mt-[40px]">
                Just paste your link below
              </p>
              <div className="w-full bg-white rounded-[10px] p-[15px] flex gap-5 items-center justify-between pl-[30px] mt-[24px]  drop-shadow-2xl">
                <input
                  type="text"
                  className="outline-none text-[18px] bg-white flex-1"
                  placeholder="Paste your website here... "
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <motion.button
                  className="py-[11px] px-[34px] rounded-[8px] font-medium relative overflow-hidden"
                  disabled={!isActive}
                  onClick={handleStartAnalysis}
                  animate={{
                    backgroundColor: isActive ? "#000000" : "#D1D5DB",
                    color: isActive ? "#FFFFFF" : "#6B7280",
                    scale: isActive ? 1 : 0.98,
                  }}
                  whileHover={
                    isActive ? { scale: 1.02, backgroundColor: "#1F2937" } : {}
                  }
                  whileTap={isActive ? { scale: 0.98 } : {}}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    cursor: isActive ? "pointer" : "not-allowed",
                  }}
                >
                  Start analysing
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ) : showLoading ? (
            <IntroLoading
              key="loading-content"
              completedTasks={completedTasks}
              tasks={tasks}
            />
          ) : (
            <motion.div
              key="chat-info-content"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <ChatInfo />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
