import React from "react";

export default function LayoutMain({ children }) {
  return (
    <main className="bg-[#FCF2FF] dark:bg-[#02053E] overflow-hidden w-full min-h-screen">
      {children}
    </main>
  );
}
