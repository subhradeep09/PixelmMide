import React from "react";

const ChatInput = ({ 
  inputMessage, 
  setInputMessage, 
  handleSendMessage, 
  handleKeyPress, 
  handleImageUpload,
  remainingQuestions,
  isLoggedIn
}) => {
  return (
    <div className="border-t border-gray-700 p-4 bg-gray-800">
      <div className="flex items-center">
        <div className="flex-1 relative rounded-lg shadow-sm">
          <input
            type="text"
            className="bg-gray-700 border-none focus:ring-2 focus:ring-purple-500 block w-full pl-4 pr-12 py-3 rounded-lg text-gray-300 placeholder-gray-400"
            placeholder={isLoggedIn ? "Ask about the image..." : "Ask me anything..."}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          onClick={handleSendMessage}
          className="ml-3 inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
      {!isLoggedIn && (
        <p className="mt-2 text-sm text-gray-400 text-center">
          {remainingQuestions > 0
            ? `${remainingQuestions} questions remaining before signup required`
            : "Please sign up to continue chatting"}
        </p>
      )}
    </div>
  );
};

export default ChatInput;