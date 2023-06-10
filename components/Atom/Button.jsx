import React from "react";

export default function Button({ style, children }) {
  return (
    <button
      className={`px-4   text-base lg:text-2xl lg:px-6 py-2 border-2  rounded-2xl  hover:text-white ${style}`}
    >
      {children}
    </button>
  );
}
