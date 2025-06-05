import "./IntroLoading.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroLoading({ websiteUrl }) {
  const [completedTasks, setCompletedTasks] = useState(0);

  const tasks = [
    "Scanning pages and structure",
    "Detecting key call-to-actions",
    "Understanding user journeys",
    "Learning your tone of voice",
    "Preparing to become your assistant",
  ];

  // Progressive task completion
  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedTasks((prev) => {
        if (prev < tasks.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000); // Complete one task every 2 seconds

    return () => clearInterval(interval);
  }, [tasks.length]);

  return (
    <motion.div
      key="loading-content"
      initial={{
        opacity: 0,
        scale: 1.05,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full flex flex-col items-center h-auto"
    >
      {/* Gradient Ball */}
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

      {/* Main Title */}
      <motion.h2
        className="text-[36px] font-bold text-gray-800 mb-[50px] text-center leading-tight"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Analysing your website...
      </motion.h2>

      {/* Task List */}
      <div className="task-list w-full max-w-[450px]">
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            className="flex items-center mb-[20px] text-[18px]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.2,
              duration: 0.5,
            }}
          >
            <motion.div
              className={`w-[24px] h-[24px] rounded-full mr-[16px] flex items-center justify-center flex-shrink-0 ${
                index < completedTasks
                  ? "bg-gradient-to-br from-[#FF6B35] to-[#FFB366]"
                  : "bg-gray-200"
              }`}
              animate={
                index < completedTasks
                  ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {index < completedTasks && (
                <motion.svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <path
                    d="M1 5L5 9L13 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </motion.div>
            <span
              className={`${
                index < completedTasks
                  ? "text-gray-800 font-medium"
                  : "text-gray-500"
              }`}
            >
              {task}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
