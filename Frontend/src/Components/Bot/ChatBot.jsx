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
    <div className="min-h-screen dark:bg-[#242424] dark:text-white">
      <div className="container mx-auto max-w-4xl px-4 pt-16 md:pt-20">
        <div className="dark:text-white rounded-lg shadow-lg bg-white dark:bg-[#1e1e1e] relative flex flex-col h-[calc(100vh-8rem)]">
          {/* Fixed Header */ }
          <div className="p-4 md:p-6 border-b flex items-center gap-3 bg-white dark:bg-[#1e1e1e] rounded-t-lg">
            <Bot className="w-6 h-6 text-blue-500" />
            <h1 className="text-lg md:text-xl font-semibold">
              Chat with TEN Everything Engine
            </h1>
          </div>

          {/* Scrollable Messages Area */ }
          <div
            className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
            ref={ chatContainerRef }
          >
            { messages.length === 0 ? (
              <div className="text-center dark:text-white mt-8 space-y-3">
                <Bot className="w-12 h-12 mx-auto mb-4 dark:text-white opacity-80" />
                <p className="text-gray-600 dark:text-gray-300">
                  Start a conversation with TEN Everything Engine
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <ChatMessage key={ index } message={ message } />
              ))
            ) }
            { isLoading && (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) }
          </div>

          {/* Fixed Input Area */ }
          <div className="p-4 md:p-6 border-t bg-white dark:bg-[#1e1e1e] rounded-b-lg">
            <ChatInput onSendMessage={ handleSendMessage } isLoading={ isLoading } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;