import Head from "next/head";
import LayoutMain from "@/components/LayoutMain";
import Intro from "@/components/organisms/Seminar/Intro";
import Jumbotron from "@/components/organisms/Seminar/Jumbotron";
import RegisterSeminar from "@/components/organisms/Seminar/RegisterSeminar";
import TimeLineSeminar from "@/components/organisms/Seminar/TimeLineSeminar";
import Narahubung from "@/components/organisms/Seminar/Narahubung";
import QNA from "@/components/organisms/Seminar/QNA";

function seminar() {
  return (
    <>
      <Head>
        <title>SRIFOTON | Seminar</title>
      </Head>
      <LayoutMain>
        <Jumbotron />
        <Intro />
        <TimeLineSeminar />
        <RegisterSeminar />
        <Narahubung />
        <QNA />
        <div className="mb-96"></div>
      </LayoutMain>
    </>
  );
}

export default seminar;
