import Accordion from "@/components/atoms/Accordion";
import { ethnocentric } from "@/public/fonts/fonts";
import React, { useState } from "react";

export default function QNAKompetisi({ competitionTypePage, qnaList }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <section id="qna-kompetisi" className="mt-8 lg:mt-12">
      <div className="min-h-screen ">
        <div className="flex flex-col p-8 ">
          <h1
            className={`flex flex-col pb-2 pl-0 mt-2 text-3xl md:text-4xl font-semibold tracking-wider text-center lg:gap-3  qna-kompetisi-header dark:qna-kompetisi-header-dark ${
              competitionTypePage
                ? ethnocentric.className + " lg:text-5xl"
                : "lg:text-6xl"
            }`}
          >
            Tanya Jawab Singkat{" "}
            <span className="lg:block bg-gradient-to-r from-[#FC39FC] to-[#337EF0] bg-clip-text text-transparent tracking-widest lg:tracking-wide  w-fit mx-auto  mt-1">
              Yuk...
            </span>
          </h1>
          <div className="grid grid-cols-1 mx-auto mt-10 lg:-translate-x-3 lg:grid-cols-2 gap-x-10 gap-y-6 lg:w-4/5">
            {qnaList.map((qna, index) => (
              <Accordion
                key={qna.id}
                isOpen={activeAccordion === index}
                toggle={() => toggleAccordion(index)}
                question={qna.question}
                answer={qna.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
