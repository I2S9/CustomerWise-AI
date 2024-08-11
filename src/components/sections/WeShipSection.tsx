import React from "react";
import { Separator } from "../ui/separator";
import { ChevronRight } from "lucide-react";

function WeShipSection() {
  const event_data = [
    {
      date: "Jul 8, 2024",
      event: "Launched CustomerWise AI",
      is_last: false,
    },

    {
      date: "Keep up to date",
      is_last: true,
    },
  ];
  return (
    <section className="pb-32 px-4">
      <div className="flex flex-col gap-16 items-center justify-center">
        <div className="">
          <p className="text-black text-[40.5px] text-center">
            We innovate. Often.
          </p>
          <p className="text-[#706D79] text-[22px] text-center">
            Product updates and announcements
          </p>
        </div>

        <section>
          {event_data.map((event, index) => (
            <div key={index}>
              <div className="text-[22px] flex gap-8">
                <img
                  src={
                    event.is_last
                      ? "/images/progress_last_icon.png"
                      : "/images/progress_icon.png"
                  }
                  alt="progress icon"
                  className="hidden lg:block"
                />
                <div className="text-[#706D79] flex gap-2 items-center">
                  {event.date} {event.is_last && <ChevronRight />}{" "}
                </div>
                <div className="text-[#333] font-bold ">{event.event}</div>
              </div>
              {!event.is_last && (
                <div>
                  <Separator
                    orientation="vertical"
                    className="h-[1.5rem] my-1 ml-5"
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default WeShipSection;
