import React from "react";
import NavBar from "../../components/common/NavBar";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic AI chatbot",
      "Up to 100 interactions per month",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "Pro",
    price: "$4.99",
    features: [
      "Advanced AI chatbot",
      "Up to 1000 interactions per month",
      "Priority email support",
      "Customizable responses",
    ],
    buttonText: "Choose Pro",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "Enterprise",
    price: "$9.99",
    features: [
      "Unlimited AI chatbot interactions",
      "24/7 support",
      "Custom integrations",
      "Dedicated account manager",
    ],
    buttonText: "Choose Enterprise",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
];

const Pricing: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: `url('/images/hero_gradient.png')` }}
      >
        <h1 className="text-5xl text-white font-bold text-center mt-12">
          Choose Your Plan
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 w-full max-w-6xl mt-28">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {plan.name}
              </h2>
              <p className="text-4xl font-bold text-gray-800 text-center mb-6">
                {plan.price} <span className="text-lg text-gray-500">/mo</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-600 text-center mb-2"
                  >
                    <span className="mr-2">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;