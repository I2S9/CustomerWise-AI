import React from "react";
import ReviewerCard from "../cards/ReviewerCard";

function RemarkSection() {
  const review_data = {
    review:
      "CustomerWise AI has revolutionized our customer service. The automated responses are quick and accurate, and our customers are thrilled with the improved response times. We can't imagine working without it!",
    image: "/images/man_2.png",
    name: "XXXX XXXX",
    role: "Headstarter SWE",
    useDarkText: true,
  };

  return (
    <section className="bg-white text-black px-8">
      <section className="w-full flex lg:items-center flex-col mt-8">
        <p className="text-[30px] md:text-[42.2px] md:max-w-[724px]">
          We believe in humanity's potential, but let's face it, we all need a break. Robots, on the other hand, never sleep.
        </p>
        <p className="text-[30px] md:text-[42.2px] mt-4 md:max-w-[724px]">
          CustomerWise AI is here to ensure your customer support runs smoothly 24/7, so you can focus on what truly matters. We handle the hard work, you take the credit.
          <span className="text-[30px] md:text-[42.2px] opacity-45">
            &nbsp;Rest easy, we've got this!
          </span>
        </p>
      </section>

      <section className="flex flex-col gap-16 lg:flex-row justify-center mt-32 text-center">
        <div>
          <p className="text-black text-[40.5px]">
            Designed to handle your busiest support days
          </p>
          <p className="text-[#706D79] text-[22px]">
            CustomerWise AI is loaded with features that keep you on top of every customer query
          </p>
        </div>
        <div>
          {/* <img src="/images/f_7.png" alt="features" /> */}
        </div>
      </section>

      <ReviewerCard {...review_data} />
    </section>
  );
}

export default RemarkSection;
