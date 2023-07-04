import { useTheme } from "next-themes";
import React from "react";
import TimelineBox from "../../molecules/TimelineBox";

const timelineContent = [
  {
    title: "Pendaftaran",
    date: "18/08/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Pembukaan Acara",
    date: "20/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Kompetisi",
    date: "21/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Seminar",
    date: "02/10/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Penutupan Acara",
    date: "04/10/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function TimeLine() {
  const { theme } = useTheme();

  return (
    <section id="timeline" className="mt-16">
      <div className="flex flex-col lg:flex-row bg-gradient-to-b from-[#E6EFFF] to-[#F0E1FF] dark:from-[#1AB5E4]/30 dark:to-[#E5AFE5]/[35%] p-4  lg:p-10 lg:px-16">
        {/* component */}
        <div className="flex flex-col gap-4 lg:gap-8 lg:w-[40%] mt-5 ">
          <h1
            className={`text-4xl font-semibold tracking-wider lg:text-6xl ${
              theme === "light" ? "timeline-header" : "timeline-header-dark"
            }`}
          >
            Alur Acara
          </h1>
          <p className="text-[#545454] dark:text-[#9BA7BC] lg:w-[65%] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno
            vulputate libero et velit interdum, ac aliquet odio mattis. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="container lg:w-[60%] mt-8 lg:mt-0">
          <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid  text-[#75497C] dark:text-[#fde5ff]">
            {timelineContent.map((item, index) => (
              <TimelineBox
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.desc}
                right={index == 1 || index == 4 ? true : false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
