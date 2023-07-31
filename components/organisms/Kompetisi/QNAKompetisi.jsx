import Accordion from "@/components/atoms/Accordion";
import React, { useState } from "react";

export default function QNAKompetisi() {
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
          <h1 className="flex flex-col pb-2 pl-0 mt-2 text-4xl font-semibold tracking-wider text-center lg:gap-3 lg:text-6xl qna-kompetisi-header dark:qna-kompetisi-header-dark">
            Tanya Jawab Singkat{" "}
            <span className="lg:block bg-gradient-to-r from-[#FC39FC] to-[#337EF0] bg-clip-text text-transparent  w-fit mx-auto  mt-1">
              Yuk...
            </span>
          </h1>
          <div className="grid grid-cols-1 mx-auto mt-10 lg:-translate-x-3 lg:grid-cols-2 gap-x-10 gap-y-6 lg:w-4/5">
            <Accordion
              isOpen={activeAccordion === 1}
              toggle={() => toggleAccordion(1)}
            />
            <Accordion
              isOpen={activeAccordion === 2}
              toggle={() => toggleAccordion(2)}
            />
            <Accordion
              isOpen={activeAccordion === 3}
              toggle={() => toggleAccordion(3)}
            />
            <Accordion
              isOpen={activeAccordion === 4}
              toggle={() => toggleAccordion(4)}
            />
            <Accordion
              isOpen={activeAccordion === 5}
              toggle={() => toggleAccordion(5)}
            />
            <Accordion
              isOpen={activeAccordion === 6}
              toggle={() => toggleAccordion(6)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
