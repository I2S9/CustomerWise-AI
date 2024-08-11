import React from "react";
import NavBar from "../../components/common/NavBar";

const Pricing: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero_gradient.png')` }}
      >
        <h1 className="text-4xl text-white font-bold text-center pt-20">
          Pricing Page
        </h1>
      </div>
    </div>
  );
};

export default Pricing;
