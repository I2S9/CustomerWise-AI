import React from "react";
import MainButton from "../common/MainButton";

function GetStartedSection() {
  return (
    <section className="flex flex-col bg-radial bg-no-repeat  justify-center items-center  min-h-[584px] bg-cover px-4">
      <p className="text-[30px] md:text-[51.7px] text-white text-center">
        Get started. You are in charge.
      </p>
      <p className="text-[22px] text-customGray mt-2 mb-6 text-center">
        CustomerWise AI optimizes and enhances your customer support, freeing up time for what truly matters
      </p>

      <div className="flex flex-col gap-8 md:flex-row">
        <MainButton
          text="Get started - It's free"
          classes="bg-white text-black w-[224.54px] h-[56px]"
        />
      </div>
    </section>
  );
}

export default GetStartedSection;
