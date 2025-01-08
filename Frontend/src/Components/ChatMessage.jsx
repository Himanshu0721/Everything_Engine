import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';

export const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`p-2 rounded-full ${isUser ? 'bg-blue-500' : 'bg-gray-500'}`}>
        {isUser ? <MessageCircle className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
      </div>
      <div className={`flex-1 px-4 py-2 rounded-lg ${isUser ? 'bg-blue-100' : 'bg-gray-100'}`}>
        <p className="text-gray-800">{message.content}</p>
        <span className="text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};