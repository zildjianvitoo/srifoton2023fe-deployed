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
        className="text-lg font-medium text-black dark:text-[#EDEDED]"
      >
        {labelText}
      </label>
      <input
        type={type}
        id={labelFor}
        placeholder={placeholder}
        {...props}
        className="w-full p-2 pl-3 bg-transparent border mt-1 border-black dark:border-[#E0E0E0] rounded-lg placeholder:text-[#969696] text-black dark:text-[#EDEDED]"
      />
    </div>
  );
}
