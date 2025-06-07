import "./ChatInfo.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePostMessage } from "../../server/usePostMessage";
import { useForm } from "react-hook-form";

export default function ChatInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const messagesEndRef = useRef(null);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Messages state
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi there! I'm your personal assistant here to help you explore our ice cream selection and services.\nLet me know what you'd like to know!",
    },
  ]);

  // Form handling
  const { handleSubmit, register, reset, watch, formState: { errors } } = useForm({
    defaultValues: { message: "" }
  });
  
  const messageValue = watch("message");
  const { data, submitData } = usePostMessage();

  // Submit logic
  const onSubmit = async (formData) => {
    if (!formData.message?.trim() || isLoading) return;
    
    const message = formData.message.trim();
    setIsLoading(true);
    
    // Add user message
    setMessages(prev => [...prev, { type: "user", text: message }]);
    
    try {
      await submitData(message);
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // API response handler
  useEffect(() => {
    if (data?.output) {
      setMessages(prev => [...prev, { type: "ai", text: data.output }]);
    }
  }, [data]);

  // Auto scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  return (
    <div className="chat-container">
      {/* Chat Widget */}
      <motion.div
        className="chat-widget"
        initial={{ 
          opacity: 0, 
          y: isMobile ? 20 : 30, 
          scale: isMobile ? 0.95 : 0.98 
        }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: isMobile ? 0.4 : 0.5, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        {/* Header */}
        <motion.div 
          className="chat-header"
          initial={{ opacity: 0, y: isMobile ? -15 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: isMobile ? 0.2 : 0.15, 
            duration: isMobile ? 0.5 : 0.3,
            ease: "easeOut"
          }}
        >
          <div className="header-content">
            <h3 className="header-title">NeuroHive AI Agent</h3>
            <div className="header-avatar">
              <img
                src={`${process.env.PUBLIC_URL}/image/intro/intro-gif.gif`}
                alt="AI Avatar"
                className="avatar-image"
              />
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <motion.div
              key={`message-${index}`}
              className={`message ${message.type === "ai" ? "message-ai" : "message-user"}`}
              initial={{ 
                opacity: 0, 
                y: isMobile ? 15 : 10,
                x: isMobile ? 0 : (message.type === "ai" ? -15 : 15)
              }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                delay: index === 0 ? (isMobile ? 0.4 : 0.3) : (isMobile ? 0.1 : 0.05),
                duration: isMobile ? 0.4 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="message-bubble">
                <p className="message-text">{message.text}</p>
              </div>
            </motion.div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <motion.div
              className="message message-ai"
              initial={{ opacity: 0, y: isMobile ? 15 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.2,
                ease: "easeOut"
              }}
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

        {/* Input Form */}
        <div className="chat-input">
          <form onSubmit={handleSubmit(onSubmit)} className="input-form">
            <div className="input-container">
              <input
                {...register("message", {
                  required: "Please enter a message",
                  minLength: { value: 1, message: "Message cannot be empty" }
                })}
                type="text"
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="message-input"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
              />
              
                             <motion.button
                 type="submit"
                 disabled={!messageValue?.trim() || isLoading}
                 className={`send-button ${messageValue?.trim() && !isLoading ? 'active' : 'inactive'}`}
                 whileHover={messageValue?.trim() && !isLoading ? { 
                   scale: isMobile ? 1.03 : 1.08,
                   boxShadow: isMobile 
                     ? "0 4px 12px rgba(79, 70, 229, 0.25)" 
                     : "0 6px 20px rgba(79, 70, 229, 0.4)"
                 } : {}}
                 whileTap={messageValue?.trim() && !isLoading ? { 
                   scale: isMobile ? 0.97 : 0.92 
                 } : {}}
                 transition={{ 
                   duration: isMobile ? 0.2 : 0.15,
                   ease: [0.25, 0.46, 0.45, 0.94]
                 }}
               >
                 {isLoading ? (
                   <div className="loading-spinner"></div>
                 ) : (
                   <svg className="send-icon" viewBox="0 0 24 24" fill="none">
                     <path
                       d="M22 2L15 22L11 13L2 9L22 2Z"
                       stroke="currentColor"
                       strokeWidth="2"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                     />
                   </svg>
                 )}
               </motion.button>
            </div>
            
            {/* Error message */}
            {errors.message && (
              <div className="error-message">
                {errors.message.message}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
