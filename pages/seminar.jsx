import Head from "next/head";
import LayoutMain from "@/components/LayoutMain";
import Intro from "@/components/organisms/Seminar/Intro";
import Jumbotron from "@/components/organisms/Seminar/Jumbotron";
import RegisterSeminar from "@/components/organisms/Seminar/RegisterSeminar";
import TimeLineSeminar from "@/components/organisms/Seminar/TimeLineSeminar";
import Narahubung from "@/components/organisms/Seminar/Narahubung";
import QNASeminar from "@/components/organisms/Seminar/QNASeminar";
import { narahubungSeminar } from "@/utils/narahubungList";
import ComingSoon from "@/components/ComingSoon";
import SeminarInfo from "@/components/organisms/Seminar/SeminarInfo";
import ModalNotVerified from "@/components/atoms/ModalNotVerified";

function Seminar() {
  return (
    <>
      <Head>
        <title>SRIFOTON | Seminar</title>
      </Head>
      {/* <ComingSoon /> */}
      <LayoutMain>
        <Jumbotron />
        <Intro />
        <SeminarInfo />
        <TimeLineSeminar />
        <RegisterSeminar />
        <Narahubung contacts={narahubungSeminar} id={"narahubung-seminar"} />
        <QNASeminar />
        <ModalNotVerified />
      </LayoutMain>
    </>
  );
}

export default Seminar;
