import React from "react";

export default function LayoutMain({ children }) {
  return (
    <main className="bg-[#FCF2FF] dark:bg-[#02053E] overflow-x-hidden w-full">
      {children}
    </main>
  );
}
