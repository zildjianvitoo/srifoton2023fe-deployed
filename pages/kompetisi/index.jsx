import LayoutMain from "@/components/LayoutMain";
import Jumbotron from "@/components/organisms/Kompetisi/Jumbotron";
import QNAKompetisi from "@/components/organisms/Kompetisi/QNAKompetisi";
import { cpQnaList } from "@/utils/qnaList";
import Head from "next/head";

export default function Kompetisi() {
  return (
    <>
      <Head>
        <title>SRIFOTON | Kompetisi</title>
      </Head>
      <LayoutMain>
        <Jumbotron />
        <QNAKompetisi qnaList={cpQnaList} />
      </LayoutMain>
    </>
  );
}
