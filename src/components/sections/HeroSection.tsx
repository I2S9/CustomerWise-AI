import React from "react";
import MainButton from "../common/MainButton";
import { ChevronRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 px-8 ">
      <p className="text-[35.8px] md:text-[75.8px] text-center mt-8">
        Always Here, Always Smart
      </p>
      <p className="text-[#706D79] font-semibold text-center my-4">
        CustomerWise AI optimizes and enhances your customer support, freeing up time for what truly matters
      </p>
      <div className="mt-8">
        <MainButton
          text="Get Started"
          classes="h-[56px] w-[163.52px]"
          rightIconRoute="/images/chevron_right.svg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
