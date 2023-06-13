import Image from "next/image";

import Jumbotron from "@/components/LandingPage/Jumbotron";
import Intro from "@/components/LandingPage/Intro";
import Benefit from "@/components/LandingPage/Benefit";
import Timeline from "@/components/LandingPage/Timeline";

export default function Home() {
  return (
    <div className="bg-[#FCF2FF] dark:bg-[#02053E] w-full overflow-x-hidden">
      <Jumbotron />
      <Intro />
      <Timeline />
      <Benefit />
      <div className="mb-96"></div>
    </div>
  );
}
