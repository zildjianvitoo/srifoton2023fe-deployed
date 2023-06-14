import Image from "next/image";

import Jumbotron from "@/components/LandingPage/Jumbotron";
import Intro from "@/components/LandingPage/Intro";
import Benefit from "@/components/LandingPage/Benefit";
import Timeline from "@/components/LandingPage/Timeline";
import Sponsor from "@/components/LandingPage/Sponsor";

export default function Home() {
  return (
    <div className="bg-[#FCF2FF] dark:bg-[#02053E] w-full overflow-x-hidden">
      <Jumbotron />
      <Intro />
      <Timeline />
      <Benefit />
      <Sponsor />
      <div className="mb-96"></div>
    </div>
  );
}
