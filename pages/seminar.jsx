import Intro from "@/components/organisms/Seminar/Intro";
import Jumbotron from "@/components/organisms/Seminar/Jumbotron";
import React from "react";

function seminar() {
  return (
    <div className="bg-[#FCF2FF] dark:bg-[#02053E] w-full overflow-x-hidden">
      <Jumbotron />
      <Intro />
      <div className="mb-96"></div>
    </div>
  );
}

export default seminar;
