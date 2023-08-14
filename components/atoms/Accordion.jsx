import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { AiFillMinusCircle } from "react-icons/ai";

export default function Accordion({ toggle, isOpen, question, answer }) {
  return (
    <div
      className={`relative cursor-pointer justify-start font-poppins text-[#494B7C] dark:text-[#E5EEFF] gradient-border-qna dark:gradient-border-qna-dark ${
        isOpen
          ? "  items-center"
          : "h-[140px] md:h-[125px] lg:h-[120px] items-center"
      }`}
      onClick={toggle}
    >
      <div
        className={`flex items-center justify-center w-full  p-4 font-medium cursor-pointer md:text-lg lg:text-base xl:text-lg ${
          !isOpen && "h-full"
        }`}
      >
        <p>{question}</p>
        <div className="grid w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 place-items-center">
          {isOpen ? (
            <AiFillMinusCircle className="text-3xl" />
          ) : (
            <BiPlusCircle className="text-3xl" />
          )}
        </div>
      </div>
      <div className={`${isOpen ? "visible p-4 pt-0" : "invisible"}`}>
        <p className="">{answer}</p>
      </div>
    </div>
  );
}
//h-[140px] md:h-[130px] lg:h-[120px]
