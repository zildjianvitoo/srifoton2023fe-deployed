import Head from "next/head";
import Jumbotron from "@/components/organisms/LandingPage/Jumbotron";
import Intro from "@/components/organisms/LandingPage/Intro";
import Benefit from "@/components/organisms/LandingPage/Benefit";
import Timeline from "@/components/organisms/LandingPage/Timeline";
import Sponsor from "@/components/organisms/LandingPage/Sponsor";
import LayoutMain from "@/components/LayoutMain";
import MascotExplanation from "@/components/organisms/LandingPage/MascotDescription";
import { useEffect } from "react";

export default function Home({}) {
  const refresh = useRefreshToken();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <Head>
        <title>SRIFOTON | Home</title>
      </Head>
      <LayoutMain>
        <Jumbotron />
        <MascotExplanation />
        <Intro />
        <Timeline />
        <Benefit />
        {/* <Sponsor /> */}
      </LayoutMain>
    </>
  );
}
