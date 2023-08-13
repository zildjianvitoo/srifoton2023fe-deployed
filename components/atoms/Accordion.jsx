//todo buat sendiri accordionnya

export default function Accordion({ toggle, isOpen, question, answer }) {
  return (
    <div
      className={`relative justify-start font-poppins text-[#494B7C] dark:text-[#E5EEFF] collapse collapse-plus gradient-border-qna dark:gradient-border-qna-dark ${
        !isOpen && "h-[140px] md:h-[130px] lg:h-[120px] items-center"
      }`}
      onClick={toggle}
    >
      <input type="radio" name="my-accordion-3" checked={isOpen} />
      <div className="items-center font-medium cursor-pointer md:text-lg lg:text-xl collapse-title">
        {question}
      </div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}
