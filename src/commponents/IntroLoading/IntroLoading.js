import "./IntroLoading.css";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoading({ completedTasks, tasks }) {
  return (
    <motion.div
      key="loading-content"
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="w-full flex flex-col items-center justify-center min-h-[440px] loading-container"
    >
      {/* Animated Ball - Simple Float */}
      <motion.div 
        className="relative mb-[15px]"
        animate={{ 
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="gradient-ball-container">
          <img
            src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
            alt="ball"
            className="object-cover w-[115px] gradient-ball"
          />
        </div>
      </motion.div>

      {/* Simple Title */}
      <motion.h2
        className="text-[40px] font-medium text-center leading-tight mb-[40px] title-text"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Analysing your website...
      </motion.h2>

      {/* Clean Task List */}
      <div className="task-list w-full max-w-[319px]">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              layout
              className="task-item"
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1
              }}
              transition={{
                delay: 0.4 + index * 0.1, 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <div className={`task-content ${index < completedTasks ? 'completed' : 'pending'}`}>
                <motion.div
                  className="task-indicator"
                  animate={
                    index < completedTasks
                      ? {
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  {index < completedTasks && (
                    <motion.svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                    >
                      <path
                        d="M6.5 11L9.5 14L15.5 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </motion.div>
                <span className="task-text">
                  {task}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
