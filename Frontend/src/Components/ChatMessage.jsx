import React from "react";
import { MessageCircle, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ChatMessage = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-start gap-4 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`p-2 rounded-full ${
          isUser ? "bg-blue-500" : "bg-gray-500"
        }`}>
        {isUser ? (
          <MessageCircle className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      <div
        className={`flex-1 px-4 py-2 rounded-lg ${
          isUser ? "bg-blue-100" : "bg-gray-100"
        }`}
        style={{
          overflowX: "auto", // Allow horizontal scrolling if content overflows
          wordWrap: "break-word", // Break long words to fit the container
          whiteSpace: "pre-wrap", // Preserve spaces and line breaks
        }}>
        {isUser ? (
          <p className="text-gray-800">{message.content}</p>
        ) : (
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                    customStyle={{
                      overflowX: "auto", // Handle horizontal scrolling within code blocks
                      whiteSpace: "pre-wrap", // Wrap code lines to prevent overflow
                    }}>
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className={`bg-gray-200 p-1 rounded ${className || ""}`}
                    {...props}
                    style={{
                      overflowX: "auto", // Handle inline code overflow
                      whiteSpace: "pre-wrap", // Wrap text if necessary
                    }}>
                    {children}
                  </code>
                );
              },
            }}>
            {message.content}
          </ReactMarkdown>
        )}
        <span className="text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};
