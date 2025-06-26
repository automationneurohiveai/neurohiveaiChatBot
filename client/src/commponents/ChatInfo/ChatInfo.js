import "./ChatInfo.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePostMessage } from "../../server/usePostMessage";
import { useForm } from "react-hook-form";
import InputValidation from "../InputValidation/InputValidation";
import ReactMarkdown from "react-markdown";

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

  const { message: data, submitDataValidationMessage } = usePostMessage();

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
        await submitDataValidationMessage({ message: message });
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
      className="chat-info-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="chat-widget"
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
          className="chat-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="header-title">NeuroHive AI Agent</h3>
          <div className="header-avatar">
            <img
              src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
              alt="AI Agent"
              className="avatar-image"
            />
           
          </div>
        </motion.div>

        <div className="chat-content">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`message ${message.type === "ai" ? "message-ai" : "message-user"}`}
              initial={{ x: message.type === "ai" ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index === 0 ? 0.8 : 0, duration: 0.5 }}
            >
              <div className="message-bubble">
                <div className="message-content">
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div
              className="message message-ai"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="message-bubble loading-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
                <span className="loading-text">AI is thinking...</span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <form onSubmit={handleSubmit(onSubmit)} className="input-form">
            <div className="input-container">
              <div className="input-wrapper" onKeyPress={handleKeyPress}>
                <InputValidation
                  name="message"
                  control={control}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="message-input w-[90%]"
                />
              </div>
              <motion.button
                type="submit"
                onClick={handleSendClick}
                disabled={!messageValue?.trim() || isLoading}
                className={`send-button ${
                  messageValue?.trim() && !isLoading ? "active" : "inactive"
                }`}
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
                  <div className="loading-spinner" />
                ) : (
                  <svg className="send-icon" viewBox="0 0 24 24" fill="none">
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
