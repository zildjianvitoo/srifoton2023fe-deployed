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
        <div className="flex flex-col p-8 ">
          <h1 className="flex flex-col pb-2 pl-0 mt-2 text-4xl font-semibold tracking-wider text-center lg:gap-3 lg:text-6xl qna-seminar-header dark:qna-seminar-header-dark">
            Tanya Jawab Singkat{" "}
            <span className="lg:block bg-gradient-to-br from-[#FC39FC] to-[#337EF0] bg-clip-text text-transparent  to-85% mt-1">
              Yuk...
            </span>
          </h1>
          <div className="grid grid-cols-1 mx-auto mt-10 -translate-x-3 lg:grid-cols-2 gap-x-10 gap-y-6 lg:w-4/5">
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
