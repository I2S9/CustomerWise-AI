import React from "react";
import NavBar from "../../components/common/NavBar";
import { FaCheckCircle, FaStar, FaMobileAlt, FaLock, FaUserClock } from "react-icons/fa";
import { MdAnalytics, MdTune } from "react-icons/md";
import { SiOpenai } from "react-icons/si";

const featuresList = [
  {
    title: "Advanced AI Chatbot",
    description: "Engage in seamless, human-like conversations powered by our state-of-the-art AI, designed to understand and respond to user queries naturally.",
    icon: <SiOpenai className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Real-time Analytics",
    description: "Monitor customer interactions in real-time, providing you with actionable insights to enhance user engagement and improve decision-making.",
    icon: <MdAnalytics className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Customizable Responses",
    description: "Tailor the chatbot’s responses to align with your brand's voice and tone, ensuring a consistent and personalized user experience.",
    icon: <MdTune className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Multi-platform Support",
    description: "Enjoy seamless integration across web and mobile platforms, ensuring consistent user experiences regardless of the device.",
    icon: <FaMobileAlt className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "24/7 Availability",
    description: "Provide round-the-clock customer support with our always-on AI chatbot, reducing wait times and increasing customer satisfaction.",
    icon: <FaUserClock className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Secure Data Handling",
    description: "Rest easy knowing that all customer data is managed securely, adhering to the latest data protection and privacy standards.",
    icon: <FaLock className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "User Feedback and Ratings",
    description: "Encourage users to rate their experience and provide feedback, helping you continually refine and improve the application.",
    icon: <FaStar className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Intuitive Dashboard",
    description: "Navigate through an easy-to-use dashboard that provides clear, concise information and tools to manage your chatbot effortlessly.",
    icon: <FaCheckCircle className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Continuous Updates",
    description: "Benefit from regular updates that introduce new features and improvements, ensuring your application remains cutting-edge.",
    icon: <FaCheckCircle className="text-blue-500 text-5xl mb-4" />,
  },
];

const Features: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('/images/hero_gradient.png')` }}>
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white text-center mb-12">Explore Our Features</h1>
          <p className="text-white text-center text-lg max-w-3xl mx-auto mb-16">
            Discover the powerful features that make our application stand out. From advanced AI to seamless integration, 
            we provide everything you need to enhance your customer interactions and improve your business outcomes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;