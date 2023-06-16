import { CgFileDocument } from "react-icons/cg";
import { FiUserPlus } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";

export default function Steps({ field = 1 }) {
  const secondStepStyle =
    (field === 2) | (field === 3) &&
    "bg-gradient-to-r from-[#F164F0] to-[#5397FF] dark:from-[#E822E6] dark:to-[#5397FF]";

  return (
    <>
      <div className={`${field === 2 && "lg:w-[72.5%]"} w-[140%]  `}>
        <div className="flex items-center justify-between w-full h-1 ">
          <div
            className={`flex items-center w-1/3 h-1 bg-[#C7C7C7] dark:bg-[#8F8F8F] ${secondStepStyle}`}
          >
            <div className="flex items-center justify-center w-8 h-8 bg-[#F164F0] dark:bg-[#E822E6] rounded-full shadow">
              <CgFileDocument className="w-[60%] h-[60%] text-white" />
            </div>
          </div>
          <div
            className={`relative flex items-center justify-between w-1/3 h-1 bg-[#C7C7C7] dark:bg-[#8F8F8F] `}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 -ml-2 rounded-full shadow ${
                (field === 2) | (field === 3)
                  ? " bg-[#5397FF] dark:bg-[#5397FF]"
                  : "bg-[#C7C7C7] dark:bg-[#8F8F8F] "
              }`}
            >
              <FiUserPlus className="w-[60%] h-[60%] text-white" />
            </div>
          </div>
          <div className="relative flex items-center justify-between w-1/3 h-1 ">
            <div className="flex items-center justify-center w-8 h-8 -ml-2 bg-[#C7C7C7] dark:bg-[#8F8F8F] rounded-full shadow">
              <BiCategory className="w-[60%] h-[60%] text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
