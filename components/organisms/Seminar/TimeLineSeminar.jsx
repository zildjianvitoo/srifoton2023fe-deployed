import TimelineBox from "@/components/molecules/TimelineBox";
import React from "react";

const timelineContent = [
  {
    title: "Presale Tiket",
    date: "18/08/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Penjualan Tiket Umum",
    date: "20/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Penutupan Acara & Seminar",
    date: "21/09/2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuno vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function TimeLineSeminar() {
  return (
    <section id="timeline" className="mt-4 lg:mt-12">
      <div className="flex flex-col items-center justify-center w-full gap-6 p-8 lg:gap-10">
        <h1 className=" text-[36px] xs:text-[44px]  leading-[3rem] lg:text-[60px] lg:leading-[4rem] font-semibold tracking-wider  p-1 pb-2 text-center lg:text-start mt-10 intro-seminar-header dark:intro-seminar-header-dark">
          Alur{" "}
          <span className="bg-gradient-to-br from-[#FC39FC] to-[#337EF0 bg-clip-text text-transparent">
            Acara
          </span>
        </h1>
        <div className="container mt-8 lg:w-3/5 lg:mt-0">
          <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid  text-[#75497C] dark:text-[#fde5ff]">
            {timelineContent.map((item, index) => (
              <TimelineBox
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.desc}
                dateColor="text-[#337EF0]"
                right={index == 1 ? true : false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
