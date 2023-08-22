import React from "react";
import TimelineBox from "../../molecules/TimelineBox";
import { ethnocentric } from "@/public/fonts/fonts";

const timelineContent = [
  {
    title: "Pendaftaran Kompetisi",
    date: "23/08/2023",
    desc: "Peserta dapat mendaftarkan diri ke satu atau lebih cabang kompetisi.",
  },
  {
    title: "Pendaftaran Seminar",
    date: "01/09/2023",
    desc: "Baik peserta maupun bukan peserta (umum) dapat mendaftarkan diri.",
  },
  {
    title: "Pembukaan Acara",
    date: "05/10/2023",
    desc: "Peresmian dan pembukaan acara SRIFOTON 2023.",
  },
  {
    title: "Penutupan Pendaftaran Kompetisi",
    date: "07/10/2023",
    desc: "Peserta tidak dapat lagi melakukan registrasi atau mendaftar kompetisi.",
  },
  {
    title: "Penutupan Pendaftaran Seminar",
    date: "27/10/2023",
    desc: "Peserta tidak dapat lagi melakukan registrasi atau mendaftar seminar.",
  },
  {
    title: "Seminar dan Penutupan Acara",
    date: "28/10/2023",
    desc: "Penutupan acara SRIFOTON 2023 dan pelaksanaan seminar.",
  },
];

export default function TimeLine() {
  return (
    <section id="timeline" className="mt-16">
      <div className="flex flex-col lg:flex-row bg-gradient-to-b from-[#E6EFFF] to-[#F0E1FF] dark:from-[#1AB5E4]/30 dark:to-[#E5AFE5]/[35%] p-4 lg:p-10 lg:px-16">
        <div className="flex flex-col gap-4 lg:gap-8 ml-3  lg:ml-6 lg:w-[40%] mt-5 ">
          <h1
            className={`text-4xl pl-0.5 font-semibold tracking-wider lg:text-6xl timeline-header dark:timeline-header-dark ${ethnocentric.className}`}
          >
            Alur Acara
          </h1>
          <p className="text-[#545454] dark:text-[#9BA7BC] lg:w-[65%] text-lg lg:text-xl text-justify">
            SRIFOTON 2023 akan diadakan dalam beberapa tahapan acara. Untuk
            mengetahui info selengkapnya kami telah menyediakan rangkaian alur
            acara sebagai berikut.
          </p>
        </div>
        <div className="container lg:w-[60%] mt-8 lg:mt-0">
          <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid text-[#75497C] dark:text-[#fde5ff]">
            {timelineContent.map((item, index) => (
              <TimelineBox
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.desc}
                right={index == 1 || index == 3 || index === 5 ? true : false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
