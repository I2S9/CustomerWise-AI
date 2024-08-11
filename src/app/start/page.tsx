import React from "react";
import NavBar from "../../components/common/NavBar";
import Chatbot from "../../components/chatbot/Chatbot";

const Start: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url('/images/hero_gradient.png')` }}
      >
        <h1 className="text-4xl text-white font-bold text-center pt-20">
          Talk with our magnificent chatbot below
        </h1>
        <Chatbot />
      </div>
    </div>
  );
};

export default Start;


