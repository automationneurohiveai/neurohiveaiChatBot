import "./ChatInfo.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ChatInfo() {
  // State variables
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [animateOrangeText, setAnimateOrangeText] = useState(false);

  // Message data matching Figma design
  const messages = [
    {
      type: "ai",
      text: "Hi there! I'm your personal assistant here to help you explore our ice cream selection and services.\nLet me know what you'd like to know!",
    },
    {
      type: "user",
      text: "Hey, could you tell me, where do you deliver?",
    },
    {
      type: "ai",
      text: "We deliver across Germany.\n🚚 Free shipping for wholesale orders over €100\n🚛 Express 24h delivery available in major cities\nLet me know your location — I'll check the options for you!",
    },
  ];

  // Effects for sequential message display
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowUserMessage(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowResponse(true);
    }, 4000);

    const timer3 = setTimeout(() => {
      setAnimateOrangeText(true);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <motion.div
      className="chat-info-container mx-auto flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Chat Widget Container - State 3 Design from Figma */}
      <motion.div
        className="chat-widget rounded-[20px] p-0 shadow-2xl border border-gray-100 w-full max-w-[712px] h-auto overflow-hidden"
        style={{ backgroundColor: "#F7F7F7" }}
        initial={{
          y: 50,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {/* Header - NeuroHive AI Agent with Orange Ball */}
        <motion.div
          className="chat-header px-[32px] py-[24px] border-b-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <h3
              className="text-[20px] font-medium text-transparent bg-clip-text -mt-12"
              style={{
                background:
                  "linear-gradient(92.72deg, #930202 -4.12%, #DE2322 51.47%, #FEC802 109.23%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              NeuroHive AI Agent
            </h3>
            <div className="relative mb-[10px] right-[40%]">
              <img
                src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
                alt="ball"
                className="object-cover w-[70px]"
              />
              <img
                src={`${process.env.PUBLIC_URL}/image/intro/intro-gif-shadow.svg`}
                className="absolute bottom-[-40px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Chat Content - Conversation with proper alignment */}
        <div className="chat-content px-[40px] py-[32px] h-[365px] flex flex-col justify-center space-y-[20px]">
          {/* AI Welcome Message - Left aligned */}
          <motion.div
            className="flex justify-start"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="rounded-[20px] px-[28px] py-[20px] max-w-[420px] bg-white border border-gray-200">
              <p className="text-[16px] text-gray-600 leading-[1.5] whitespace-pre-line">
                {messages[0].text}
              </p>
            </div>
          </motion.div>

          {/* User Message - Right aligned */}
          {showUserMessage && (
            <motion.div
              className="flex justify-end"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-500 text-white rounded-[20px] px-[24px] py-[16px] max-w-[380px]">
                <p className="text-[16px] leading-[1.5]">{messages[1].text}</p>
              </div>
            </motion.div>
          )}

          {/* AI Response - Left aligned */}
          {showResponse && (
            <motion.div
              className="flex justify-start"
              initial={{ x: -20, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#FF6B35] to-[#FF8E53] text-white rounded-[20px] px-[28px] py-[22px] max-w-[480px] shadow-xl"
                animate={
                  animateOrangeText
                    ? {
                        boxShadow: [
                          "0 8px 32px rgba(255, 107, 53, 0.4)",
                          "0 12px 40px rgba(255, 107, 53, 0.6)",
                          "0 8px 32px rgba(255, 107, 53, 0.4)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <motion.p
                  className="text-[16px] leading-[1.5] whitespace-pre-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.span
                    animate={
                      animateOrangeText
                        ? {
                            textShadow: [
                              "0 0 0px rgba(255, 255, 255, 0)",
                              "0 0 12px rgba(255, 255, 255, 0.8)",
                              "0 0 0px rgba(255, 255, 255, 0)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  >
                    {messages[2].text}
                  </motion.span>
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Chat Input Field */}
        <div className="px-[32px] py-[20px]">
          <div className="flex items-center bg-white border border-gray-200 rounded-full p-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 bg-transparent outline-none text-[16px]  placeholder-gray-400"
            />
            <motion.button
              className="ml-2 p-[10px] rounded-full shadow-md hover:shadow-lg"
              style={{
                background: "#D6D6D6",
                opacity: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                opacity: 1,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <img
                  src={`${process.env.PUBLIC_URL}/image/send.png`}
                  alt="send"
                  width="18"
                  height="18"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
