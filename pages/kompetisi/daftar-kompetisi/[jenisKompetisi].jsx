import {
  FirstField,
  SecondField,
} from "@/components/organisms/Kompetisi/DaftarKompetisi";
import LayoutField from "@/components/organisms/Kompetisi/DaftarKompetisi/LayoutField";
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
    <div className="bg-[#FCF2FF] dark:bg-[#02053E] overflow-x-hidden w-full ">
      <div className="p-8 lg:px-24" onSubmit={handleSubmit}>
        <LayoutField>
          <form className="z-10 flex flex-col">
            <FirstField jenisKompetisi={validJenisKompetisi} />
            <SecondField jenisKompetisi={validJenisKompetisi} />
            <button
              type="submit"
              className="w-[87%] lg:w-3/5 mx-auto text-[#FCFCFC] mt-6 text-lg lg:text-xl font-semibold tracking-wider rounded-lg bg-[#2E7BEF] py-2 opacity-90 hover:opacity-100 "
            >
              Submit
            </button>
          </form>
        </LayoutField>
      </div>
    </div>
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
