import LayoutMain from "@/components/LayoutMain";
import Jumbotron from "@/components/organisms/Kompetisi/Jumbotron";
import QNAKompetisi from "@/components/organisms/Kompetisi/QNAKompetisi";
import { cpQnaList } from "@/utils/qnaList";

export default function Kompetisi() {
  return (
    <>
      <LayoutMain>
        <Jumbotron />
        <QNAKompetisi qnaList={cpQnaList} />
      </LayoutMain>
    </>
  );
}
