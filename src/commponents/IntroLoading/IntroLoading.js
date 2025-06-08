import "./IntroLoading.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroLoading({ completedTasks, tasks }) {
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
      className="intro-loading"
    >
      {/* Avatar */}
      <div className="loading-avatar">
        <img
          src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
          alt="AI Agent"
          className="loading-avatar-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/image/intro/intro-gif-shadow.svg`}
          className="loading-avatar-shadow"
        />
      </div>

      {/* Main Title */}
      <motion.h2
        className="loading-title"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Analysing your website...
      </motion.h2>

      {/* Task List */}
      <div className="task-list">
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            className="task-item"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5 + index * 0.2,
              duration: 0.5,
            }}
          >
            <motion.div
              className={`task-icon ${
                index < completedTasks ? "completed" : "pending"
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
              className={`task-text ${
                index < completedTasks ? "completed" : "pending"
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
