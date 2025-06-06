import "./ChatInfo.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePostMessage } from "../../server/usePostMessage";
import { useForm } from "react-hook-form";
import InputChatBot from "../InputChatBot/InputChatBot";

export default function ChatInfo() {
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi there! I'm your personal assistant here to help you explore our ice cream selection and services.\nLet me know what you'd like to know!",
    },
  ]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest(".chat-content");
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      } else {
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }
  };

  const { data, submitData } = usePostMessage();

  const { handleSubmit, reset, control, watch } = useForm({
    defaultValues: {
      message: "",
    },
  });

  const messageValue = watch("message");

  const onSubmit = async (formData) => {
    if (formData.message.trim() && !isLoading) {
      const message = formData.message.trim();
      setUserMessage(message);
      setIsLoading(true);

      setMessages((prev) => [...prev, { type: "user", text: message }]);

      setTimeout(() => {
        scrollToBottom();
      }, 100);

      try {
        await submitData(message);
        reset();
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) {
        handleSubmit(onSubmit)();
      }
    }
  };

  const handleSendClick = () => {
    if (!isLoading) {
      handleSubmit(onSubmit)();
    }
  };

  useEffect(() => {
    if (data?.output) {
      setMessages((prev) => [...prev, { type: "ai", text: data.output }]);

      setTimeout(() => {
        scrollToBottom();
      }, 150);
    }
  }, [data]);

  return (
    <motion.div
      className="chat-info-container mx-auto flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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

        <div className="chat-content px-[40px] py-[32px] h-[365px] flex flex-col justify-start space-y-[20px] overflow-y-auto">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex ${message.type === "ai" ? "justify-start" : "justify-end"}`}
              initial={{ x: message.type === "ai" ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index === 0 ? 0.8 : 0, duration: 0.5 }}
            >
              <div
                className={`rounded-[20px] px-[28px] py-[20px] max-w-[420px] ${
                  message.type === "ai"
                    ? "bg-white border border-gray-200"
                    : "bg-blue-500 text-white"
                }`}
              >
                <p
                  className={`text-[16px] leading-[1.5] whitespace-pre-line ${
                    message.type === "ai" ? "text-gray-600" : "text-white"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white border border-gray-200 rounded-[20px] px-[28px] py-[20px]">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    AI is thinking...
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="px-[32px] py-[20px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center bg-white border border-gray-200 rounded-full p-2">
              <div className="flex-1" onKeyPress={handleKeyPress}>
                <InputChatBot
                  name="message"
                  control={control}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                />
              </div>
              <motion.button
                type="submit"
                onClick={handleSendClick}
                disabled={!messageValue?.trim() || isLoading}
                className={`ml-2 p-[10px] rounded-full shadow-md hover:shadow-lg transition-all duration-200 ${
                  messageValue?.trim() && !isLoading
                    ? "opacity-100"
                    : "opacity-50 cursor-not-allowed"
                }`}
                style={{
                  background:
                    messageValue?.trim() && !isLoading ? "#4F46E5" : "#D6D6D6",
                }}
                whileHover={
                  messageValue?.trim() && !isLoading
                    ? {
                        scale: 1.05,
                        opacity: 1,
                      }
                    : {}
                }
                whileTap={
                  messageValue?.trim() && !isLoading ? { scale: 0.95 } : {}
                }
                transition={{ duration: 0.2 }}
              >
                {isLoading ? (
                  <div className="w-[18px] h-[18px] border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
