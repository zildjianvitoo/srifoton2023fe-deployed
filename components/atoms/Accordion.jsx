export default function Accordion({ toggle, isOpen }) {
  return (
    <div
      className={`relative justify-start font-poppins text-[#494B7C] dark:text-[#E5EEFF] collapse collapse-plus gradient-border-qna dark:gradient-border-qna-dark ${
        !isOpen && "h-[90px] md:h-[80px] lg:h-[70px] items-center"
      }`}
      onClick={toggle}
    >
      <input type="radio" name="my-accordion-3" checked={isOpen} />
      <div className="text-xl font-medium cursor-pointer lg:text-2xl collapse-title">
        Lorem ipsum dolor sit amet, consectetur elit?
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  );
}
