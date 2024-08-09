import React from "react";

function FooterSection() {
  return (
    <section className="bg-customDark pt-10 pb-10 text-white flex justify-center items-center gap-2 px-4 flex-col md:flex-row">
      <div className="flex items-center gap-4">
        <p className="text-customGray font-bold">
          The chatbot assistant that works for you
        </p>
        <a href="https://github.com/I2S9/customerwise-ai" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">
          Github
        </a>
        <a href="https://www.openai.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">
          Powered by OpenAI
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">
          Resources
        </a>
      </div>
    </section>
  );
}

export default FooterSection;
