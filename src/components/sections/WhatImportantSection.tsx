import React from "react";
import FeatureCard from "../cards/FeatureCard";
import FeatureCardVertical from "../cards/FeatureCardVertical";
import ReviewerCard from "../cards/ReviewerCard";

function WhatImportantSection() {
  const first_row_data = {
    image_url: "/images/chatbot.png",
    title: "Powerful",
    description:
      "Empowering your team with intelligent support.",
  };

  const second_row_data = {
    image_url: "/images/reviews.png",
    title: "Meet the fastest way to find the best assistance",
    options: [
      "Because great support starts with great feedback",
      "Every comment helps us improve",
      "Your experience, our priority",
    ],
    reverse: true,
  };

  const fourth_row_data = {
    image_url: "/images/f_4.png",
    title: "Smart scheduling links that save you time",
    description:
      "Rise has built in scheduling links that nudge towards times that optimize for maximum focus time. You can even use it to schedule with multiple teammates.",
    reverse: true,
  };


  const sixth_row_data = {
    image_url: "/images/f_6.png",
    title: "One click meeting optimizations",
    description:
      "Reclaim valuable time by accepting suggestions by Rise that work for everyone.",
    reverse: true,
  };

  const review_data = {
    review:
      "Thanks to CustomerWise AI, we've significantly improved our customer satisfaction. The advanced features help us stay on top of every query, and the seamless integration has made our workflow smoother than ever. Our support team is now more productive and our customers are happier!",
    image: "",
    name: "",
    role: "",
  };

  return (
    <section className="bg-customDark">
      <div className="ml-8">
        <p className="text-white  text-[40.5px] text-bold">
          <br />
          Everyday
        </p>
        <p className="text-[22px] text-customGray">
        </p>
      </div>

      <div className="mt-8">
        <FeatureCard {...first_row_data} />
      </div>
      <div className="mt-2">
        <FeatureCard {...second_row_data} />
      </div>
      <div className="mt-2">
        <div className="flex flex-col gap-8 md:flex-row">
        </div>
      </div>
      <ReviewerCard {...review_data} />
    </section>
  );
}

export default WhatImportantSection;
