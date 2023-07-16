import Accordion from "@/components/atoms/Accordion";
import React, { useState } from "react";

export default function QNA() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <section id="qna-seminar" className="mt-8 lg:mt-24">
      <div className="min-h-screen ">
        <div className="flex flex-col p-8 pl-12 lg:pl-36">
          <h1 className="flex flex-col pb-2 mt-2 text-4xl font-semibold tracking-wider lg:gap-3 lg:text-6xl qna-seminar-header dark:qna-seminar-header-dark">
            Tanya Jawab Singkat{" "}
            <span className="lg:block text-[#494B7C] dark:text-[#E5EEFF]">
              Yuk...
            </span>
          </h1>
          <div className="grid grid-cols-1 -translate-x-3 lg:grid-cols-2 gap-x-10">
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
          </div>
        </div>
      </div>
    </section>
  );
}
