import React from "react";

function FooterSection() {
  const product = ["Features", "Pricing", "Changelog"];
  const company = ["Manifest", "Community", "Careers", "Contact"];
  const resources = [
    "Help center",
    "Report bug",
    "Terms of use",
    "Privacy policy",
  ];
  return (
    <section className="bg-customDark pt-10 pb-20 text-white flex justify-around gap-8 px-8 flex-col md:flex-row lg:px-[10rem]">
      <div>
        <img src="/images/footer_logo.png" alt="footer logo" />
        <p className="text-customGray font-bold">
          The chatbot assistant that works for you
        </p>
      </div>
      <div className="flex-grow flex justify-around flex-col gap-8 md:flex-row">
        <div>
          <div>
            <p className="font-bold">Product</p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold">Company</p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold">Resources</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
