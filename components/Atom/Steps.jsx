import { CgFileDocument } from "react-icons/cg";
import { FiUserPlus } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";

export default function Steps() {
  return (
    <>
      <div className="w-[145%] ">
        <div className="flex items-center justify-between w-full h-1 ">
          <div className="flex items-center w-1/3 h-1 bg-[#C7C7C7] dark:bg-[#8F8F8F]">
            <div className="flex items-center justify-center w-8 h-8 bg-[#F164F0] dark:bg-[#E822E6] rounded-full shadow">
              <CgFileDocument className="w-[60%] h-[60%] text-white" />
            </div>
          </div>
          <div className="relative flex items-center justify-between w-1/3 h-1 bg-[#C7C7C7] dark:bg-[#8F8F8F]">
            <div className="flex items-center justify-center w-8 h-8 -ml-2 bg-[#C7C7C7] dark:bg-[#8F8F8F] rounded-full shadow">
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
