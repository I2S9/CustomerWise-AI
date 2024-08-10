import React from "react";
import NavBar from "../common/NavBar";

const Start: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero_gradient.png')` }}
      >
        <h1 className="text-4xl text-white font-bold text-center pt-20">
          Let's Start Page
        </h1>
      </div>
    </div>
  );
};

export default Start;
