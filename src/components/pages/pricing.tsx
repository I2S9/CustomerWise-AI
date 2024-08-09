import React from "react";
import NavBar from "../common/NavBar";

const Pricing: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/images/your-pricing-image.jpg')` }}
      >
        <h1 className="text-4xl text-white font-bold text-center pt-20">
          Pricing Page
        </h1>
      </div>
    </div>
  );
};

export default Pricing;
