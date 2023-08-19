import Head from "next/head";
import Jumbotron from "@/components/organisms/LandingPage/Jumbotron";
import Intro from "@/components/organisms/LandingPage/Intro";
import Benefit from "@/components/organisms/LandingPage/Benefit";
import Timeline from "@/components/organisms/LandingPage/Timeline";
import Sponsor from "@/components/organisms/LandingPage/Sponsor";
import LayoutMain from "@/components/LayoutMain";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>SRIFOTON | Home</title>
      </Head>
      <LayoutMain>
        <Jumbotron />
        <Intro />
        <Timeline />
        <Benefit />
        <Sponsor />
        <div className="mb-96 bg-gradient-to-r"></div>
      </LayoutMain>
    </>
  );
}
