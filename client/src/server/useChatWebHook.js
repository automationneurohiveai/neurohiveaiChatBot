import { useState } from "react";
import { BASE_URL } from "../config/config";

export const useChatWebHook = () => {

  const [chatWebhookData, setChatWebhookData] = useState(null);
  const [loading, setLoading] = useState(false);
     const handleChatWebhook = async (chatWebhookData) => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/api/chat-webhook`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(chatWebhookData),
            });
            const result = await response.json();
            console.log("Chat webhook received", result);
            setChatWebhookData(result);
            setLoading(false);
        } catch (err) {
            console.error("Error sending to chat webhook:", err);
            setLoading(false);
        }
     }
  return {
    handleChatWebhook,
    chatWebhookData,
    loading,
  };
};