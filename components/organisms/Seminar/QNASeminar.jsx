import Accordion from "@/components/atoms/Accordion";
import { ethnocentric } from "@/public/fonts/fonts";
import { seminarQnaList } from "@/utils/qnaList";
import React, { useState } from "react";

export default function QNASeminar() {
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
      <div className="min-h-screen">
        <div className="flex flex-col p-8">
          {/* ... */}
          <div className="grid grid-cols-1 mx-auto mt-10 -translate-x-3 lg:grid-cols-2 gap-x-10 gap-y-6 lg:w-4/5">
            {seminarQnaList.map((qna, index) => (
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
