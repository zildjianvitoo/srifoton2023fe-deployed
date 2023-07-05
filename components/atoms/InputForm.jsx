import { useEffect } from "react";

export default function InputForm({
  labelText,
  labelFor,
  type,
  placeholder,
  ...props
}) {
  return (
    <div className="flex flex-col">
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
        className="w-full p-2 pl-3 bg-transparent border mt-1 border-[#7B7B7B] dark:border-[#E0E0E0] rounded-lg placeholder:text-[#969696] text-black dark:text-[#EDEDED]"
        required
        {...props}
      />
    </div>
  );
}
