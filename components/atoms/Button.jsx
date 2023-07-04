import React from "react";

export default function Button({ style, children, variant }) {
  if (variant === "submitButton")
    return (
      <button
        type="submit"
        className={`text-[#FCFCFC]  text-lg lg:text-xl font-semibold tracking-wider rounded-lg bg-[#2E7BEF] dark:bg-[#E924E8] py-2 opacity-90 hover:opacity-100  ${style}`}
      >
        {children}
      </button>
    );
  return (
    <button
      className={`px-4 text-base lg:text-2xl lg:px-6 py-2 border-2  rounded-2xl  hover:text-white ${style}`}
    >
      {children}
    </button>
  );
}
