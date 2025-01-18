import React, { useState, useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import { ChatMessage } from "../ChatMessage";
import { ChatInput } from "../ChatInput";
import { generateResponse } from "@/services/mistral";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleSendMessage = async (content) => {
    const userMessage = {
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const apiMessages = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));
      apiMessages.push({ role: "user", content });

      const response = await generateResponse(apiMessages);

      let assistantMessage = {
        role: "assistant",
        content: "",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < response.length) {
          assistantMessage.content += response[index];
          setMessages((prev) => {
            const updatedMessages = [...prev];
            updatedMessages[updatedMessages.length - 1] = { ...assistantMessage };
            return updatedMessages;
          });
          scrollToBottom();
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 0); 
    } catch (error) {
      console.error("Error getting response:", error);
      const errorMessage = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-4 border-b flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-semibold">
              Chat with TEN Everything Engine
            </h1>
          </div>

          {/* Chat container with ref */}
          <div
            className="h-[538px] overflow-y-auto p-4 space-y-4"
            ref={chatContainerRef}
          >
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <Bot className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p>Start a conversation with TEN Everything Engine</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))
            )}
            {isLoading && (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;