import LayoutMain from "@/components/LayoutMain";
import LayoutField from "@/components/organisms/Kompetisi/DaftarKompetisi/LayoutField";
import RequireLogin from "@/components/HOC/WithAuth";
import Head from "next/head";
import React from "react";
import DetailTeamCard from "@/components/organisms/Dashboard/DetailTeamCard";
import { useUserStore } from "@/store/userStore";

function DetailTeam() {
  const user = useUserStore((state) => state.user);

  return (
    <>
      <Head>
        <title>SRIFOTON | Detail Tim UI/UX Design</title>
      </Head>
      <LayoutMain>
        <div className="p-8 lg:px-24 lg:mt-10">
          <LayoutField>
            <div className="z-10 flex flex-col">
              <DetailTeamCard
                jenisKompetisi="web development"
                team={user?.registered?.competitions?.web_development}
              />
            </div>
          </LayoutField>
        </div>
      </LayoutMain>
    </>
  );
}

export default RequireLogin(DetailTeam);
