import React from "react";

const ChatBubble = ({ message }) => {
  return (
    <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
          message.sender === "user"
            ? "bg-purple-600 text-white"
            : "bg-gray-700 text-gray-200"
        }`}
      >
        <p>{message.text}</p>
        <p className={`text-xs mt-1 ${
          message.sender === "user" ? "text-purple-200" : "text-gray-400"
        }`}>
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;