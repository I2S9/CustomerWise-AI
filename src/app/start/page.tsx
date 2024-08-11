import React from "react";
import NavBar from "../../components/common/NavBar";
import Chatbot from "../../components/chatbot/Chatbot";
import { FaRegCommentDots } from "react-icons/fa";

const Start: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url('/images/hero_gradient.png')` }}
      >
        <h1 className="text-4xl text-white font-bold text-center pt-20">
          Talk with CustomerWise AI chatbot below
        </h1>
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 mt-6">
          <div className="flex flex-col h-[500px] overflow-y-auto">
            <Chatbot />
          </div>
          <div className="flex items-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <FaRegCommentDots />
              <span>Feedback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;