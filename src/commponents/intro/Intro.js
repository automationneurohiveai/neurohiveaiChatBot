import "./Intro.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroLoading from "../IntroLoading/IntroLoading";
import ChatInfo from "../ChatInfo/ChatInfo";
import { usePostUrl } from "../../server/usePostUrl";
import { useForm, Controller } from "react-hook-form";

export default function Intro() {
  const [isActive, setIsActive] = useState(false);

  const [showChatInfo, setShowChatInfo] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);

  const { dataUrl, submitDataUrl, loadingUrl } = usePostUrl();
  const tasks = [
    "Scanning pages and structure",
    "Detecting key call-to-actions",
    "Understanding user journeys",
    "Learning your tone of voice",
    "Preparing to become your assistant",
  ];

  const { handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      url: "",
    },
  });

  const urlValue = watch("url");

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const onSubmit = async (data) => {
    if (isActive) {
      setCompletedTasks(0);
      setShowChatInfo(false);

      // Submit URL to your API
      await submitDataUrl(data.url);
    }
  };

  useEffect(() => {
    const hasValidUrl = urlValue.trim() !== "" && isValidUrl(urlValue.trim());

    if (hasValidUrl) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
    }
  }, [urlValue]);

  useEffect(() => {
    if (loadingUrl) {
      const interval = setInterval(() => {
        setCompletedTasks((prev) => {
          if (prev < 4) {
            return prev + 1;
          }
          return prev;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [loadingUrl]);

  useEffect(() => {
    if (dataUrl && completedTasks === 4) {
      setCompletedTasks(5);

      setTimeout(() => {
        setShowChatInfo(true);
      }, 1000);
    }
  }, [dataUrl, completedTasks]);

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

      <AnimatePresence mode="wait">
        {!loadingUrl && !showChatInfo && completedTasks === 0 ? (
          <motion.div
            key="form-container"
            className="w-[711px] p-[40px] bg-[#F7F7F7] rounded-[10px] flex flex-col items-center mt-[98px] shadow-lg h-[520px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -30,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.4, 0.25, 1],
              exit: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <motion.div
              key="intro-content"
              className="w-full flex flex-col items-center"
              exit={{
                opacity: 0,
                scale: 0.8,
                y: -20,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
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
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="w-full bg-white rounded-[10px] p-[15px] flex gap-5 items-center justify-between pl-[30px] mt-[24px]  drop-shadow-2xl">
                  <Controller
                    name="url"
                    control={control}
                    rules={{
                      required: "URL is required",
                      validate: (value) =>
                        isValidUrl(value) || "Please enter a valid URL",
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="outline-none text-[18px] bg-white flex-1"
                        placeholder="Paste your website here... "
                      />
                    )}
                  />
                  <motion.button
                    type="submit"
                    className="py-[11px] px-[34px] rounded-[8px] font-medium relative overflow-hidden"
                    disabled={!isActive}
                    animate={{
                      backgroundColor: isActive ? "#000000" : "#D1D5DB",
                      color: isActive ? "#FFFFFF" : "#6B7280",
                      scale: isActive ? 1 : 0.98,
                    }}
                    whileHover={
                      isActive
                        ? { scale: 1.02, backgroundColor: "#1F2937" }
                        : {}
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
              </form>
            </motion.div>
          </motion.div>
        ) : loadingUrl || (!showChatInfo && completedTasks > 0) ? (
          <motion.div
            key="loading-container"
            className="w-[711px] p-[40px] bg-[#F7F7F7] rounded-[10px] flex flex-col items-center mt-[98px] shadow-lg h-[520px]"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -20,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.4, 0.25, 1],
              filter: { duration: 0.6 },
            }}
          >
            <IntroLoading
              key="loading-content"
              completedTasks={completedTasks}
              tasks={tasks}
            />
          </motion.div>
        ) : (
          <motion.div
            key="chat-info-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              opacity: { duration: 0.6, ease: "easeInOut" },
              y: { duration: 0.8, ease: "easeOut" },
            }}
            className="w-full"
          >
            <ChatInfo />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
