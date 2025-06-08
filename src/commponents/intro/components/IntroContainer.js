import { motion } from "framer-motion";

const IntroContainer = ({ 
  children, 
  state,
  className = ""
}) => {
  // Анимации для разных состояний
  const animations = {
    idle: {
      initial: { opacity: 0, y: 20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: {
        opacity: 0,
        scale: 0.9,
        y: -30,
        filter: "blur(10px)",
      },
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        exit: { duration: 0.8, ease: "easeInOut" },
      }
    },
    analyzing: {
      initial: {
        opacity: 0,
        y: 30,
        scale: 0.9,
        filter: "blur(10px)",
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        y: -20,
      },
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
        filter: { duration: 0.6 },
      }
    },
    chat_ready: {
      initial: {
        opacity: 0,
        y: 30,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      transition: {
        duration: 0.8,
        ease: "easeOut",
        opacity: { duration: 0.6, ease: "easeInOut" },
        y: { duration: 0.8, ease: "easeOut" },
      }
    }
  };

  const currentAnimation = animations[state] || animations.idle;

  // Определяем нужен ли фиксированный контейнер
  const needsFixedContainer = state === 'idle' || state === 'analyzing';

  if (!needsFixedContainer) {
    // Для чата используем простой контейнер
    return (
      <motion.div
        key={`${state}-content`}
        className={`intro-chat-container ${className}`}
        initial={currentAnimation.initial}
        animate={currentAnimation.animate}
        transition={currentAnimation.transition}
      >
        {children}
      </motion.div>
    );
  }

  // Для формы и загрузки используем фиксированный контейнер
  return (
    <motion.div
      key={`${state}-container`}
      className={`intro-fixed-container ${className}`}
      initial={currentAnimation.initial}
      animate={currentAnimation.animate}
      exit={currentAnimation.exit}
      transition={currentAnimation.transition}
    >
      <motion.div
        key={`${state}-content`}
        className="intro-content-wrapper"
        exit={{
          opacity: 0,
          scale: 0.8,
          y: -20,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default IntroContainer; 