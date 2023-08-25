import LayoutMain from "@/components/LayoutMain";
import CompetitionInfo from "@/components/organisms/Kompetisi/CompetitionInfo";
import Jumbotron from "@/components/organisms/Kompetisi/Jumbotron";
import QNAKompetisi from "@/components/organisms/Kompetisi/QNAKompetisi";
import { kompetisiQnaList } from "@/utils/qnaList";
import Head from "next/head";

export default function Kompetisi() {
  return (
    <>
      <Head>
        <title>SRIFOTON | Kompetisi</title>
      </Head>
      <LayoutMain>
        <Jumbotron />
        <CompetitionInfo />
        <QNAKompetisi qnaList={kompetisiQnaList} />
      </LayoutMain>
    </>
  );
}
