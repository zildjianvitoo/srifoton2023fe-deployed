import Button from "@/components/atoms/Button";
import {
  FirstField,
  SecondField,
} from "@/components/organisms/Kompetisi/DaftarKompetisi";
import LayoutField from "@/components/organisms/Kompetisi/DaftarKompetisi/LayoutField";
import LayoutMain from "@/components/LayoutMain";
import { useTeamData } from "@/store/teamData";
import { useRouter } from "next/router";

export default function DaftarKompetisi() {
  const { teamName } = useTeamData();
  const router = useRouter();
  const { jenisKompetisi } = router.query;

  const validJenisKompetisi = jenisKompetisi?.split("-").join(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("disini", { teamName });
  };

  return (
    <LayoutMain>
      <div className="p-8 lg:px-24" onSubmit={handleSubmit}>
        <LayoutField>
          <form className="z-10 flex flex-col">
            <FirstField jenisKompetisi={validJenisKompetisi} />
            <SecondField jenisKompetisi={validJenisKompetisi} />
            <Button
              variant="submitButton"
              style={"w-[87%] lg:w-3/5 mx-auto mt-6"}
            >
              Submit
            </Button>
          </form>
        </LayoutField>
      </div>
    </LayoutMain>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { jenisKompetisi: "mobile-legend" } },
      { params: { jenisKompetisi: "uiux-design" } },
      { params: { jenisKompetisi: "web-development" } },
      { params: { jenisKompetisi: "competitive-programming" } },
    ],
    fallback: false,
  };
};
