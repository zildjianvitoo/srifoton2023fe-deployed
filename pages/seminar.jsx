import LayoutMain from "@/components/LayoutMain";
import Intro from "@/components/organisms/Seminar/Intro";
import Jumbotron from "@/components/organisms/Seminar/Jumbotron";
import RegisterSeminar from "@/components/organisms/Seminar/RegisterSeminar";
import TimeLineSeminar from "@/components/organisms/Seminar/TimeLineSeminar";
import React from "react";

function seminar() {
  return (
    <LayoutMain>
      <Jumbotron />
      <Intro />
      <TimeLineSeminar />
      <RegisterSeminar />
      <div className="mb-96"></div>
    </LayoutMain>
  );
}

export default seminar;
