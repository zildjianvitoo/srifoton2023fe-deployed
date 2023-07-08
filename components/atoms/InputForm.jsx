import { useTheme } from "next-themes";

const InputForm = function InputForm({
  labelText,
  labelFor,
  type,
  placeholder,
  register,
  rules,
}) {
  // const { theme } = useTheme();

  // const onFocusHandler = (e) => {
  //   e.target.placeholder = "Ketik sesuatu...";
  // };
  // const onBlurHandler = (e) => {
  //   e.target.placeholder = placeholder;
  // };

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={labelFor}
        className="text-lg font-medium text-[#464646] dark:text-[#EDEDED]"
      >
        {labelText}
      </label>
      <input
        type={type}
        id={labelFor}
        placeholder={placeholder}
        className="w-full p-2 pl-3 bg-transparent border mt-1 border-[#7B7B7B] dark:border-[#E0E0E0] rounded-lg placeholder:text-[#A3A3A3] text-black dark:text-[#EDEDED] focus:border-[#2E7BEF] focus:outline-[#2E7BEF] "
        // onFocus={onFocusHandler}
        // onBlur={onBlurHandler}
        {...register(labelFor, rules)}
      />
    </div>
  );
};

export default InputForm;
