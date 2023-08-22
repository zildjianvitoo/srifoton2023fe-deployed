import AuthSidebar from "@/components/AuthSidebar";
import LayoutMain from "@/components/LayoutMain";
import NoSSR from "@/components/NoSSR";
import RequireLogin from "@/components/HOC/WithAuth";
import NotRegistered from "@/components/organisms/Dashboard/NotRegistered";
import RegisteredCompetitions from "@/components/organisms/Dashboard/RegisteredCompetitions";
import { ethnocentric } from "@/public/fonts/fonts";
import { useUserStore } from "@/store/userStore";
import { getDataUser } from "@/utils/api";
import Head from "next/head";
import { useEffect, useState } from "react";

function Kompetisi() {
  const [isRegisteredCompetition, setIsRegisteredCompetition] = useState(false);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const getNewestDataUser = async () => {
      const { data } = await getDataUser();
      setUser(data);
    };
    getNewestDataUser();
  }, [setUser]);

  useEffect(() => {
    if (user?.registered?.competitions?.web_development) {
      setIsRegisteredCompetition(true);
    }
    if (user?.registered?.competitions?.competitive_programming) {
      setIsRegisteredCompetition(true);
    }
    if (user?.registered?.competitions?.uiux_design) {
      setIsRegisteredCompetition(true);
    }
  }, [user]);

  const isUserRegisteredWebDev =
    user?.registered?.competitions?.web_development;

  const isUserRegisteredCP =
    user?.registered?.competitions?.competitive_programming;

  const isUserRegisteredUIUX = user?.registered?.competitions?.uiux_design;

  const teamNameWebdev =
    user?.registered?.competitions?.web_development?.team_name;

  const teamNameCP =
    user?.registered?.competitions?.competitive_programming?.team_name;

  const teamNameUIUX = user?.registered?.competitions?.uiux_design?.team_name;

  return (
    <>
      <Head>
        <title>SRIFOTON | Dashboard Kompetisi</title>
      </Head>
      <LayoutMain>
        <div className="flex flex-col lg:flex-row  w-full mx-auto mt-10 lg:gap-16 lg:w-[85%]">
          <div className="lg:w-[22rem] lg:mt-8">
            <AuthSidebar />
          </div>
          <div className="w-full md:mt-10 lg:mt-20">
            <NoSSR>
              {isRegisteredCompetition ? (
                <div className="flex flex-col">
                  <h1 className="mx-auto text-3xl font-bold md:text-4xl lg:text-5xl text-[#494B7C] dark:text-white mt-10 md:mt-0">
                    Kompetisi
                  </h1>
                  <p className="mx-auto mt-3 text-lg text-center text-black dark:text-white">
                    Menampilkan kompetisi yang sudah kamu <br /> daftar di{" "}
                    <span
                      className={`${ethnocentric.className} bg-gradient-to-r from-pink-srifoton to-blue-srifoton text-transparent bg-clip-text`}
                    >
                      SRIFOTON 2023
                    </span>
                  </p>
                  {isUserRegisteredWebDev && (
                    <RegisteredCompetitions
                      type={"Web Development"}
                      teamName={teamNameWebdev}
                      groupLink={
                        " https://chat.whatsapp.com/Hwp4lBgCudvH5rkALiolES"
                      }
                    />
                  )}
                  {isUserRegisteredCP && (
                    <RegisteredCompetitions
                      type={"Competitive Programming"}
                      teamName={teamNameCP}
                      groupLink={
                        "https://chat.whatsapp.com/DJ3lizydOVmBF3nJItlyre"
                      }
                    />
                  )}
                  {isUserRegisteredUIUX && (
                    <RegisteredCompetitions
                      type={"UI/UX Design"}
                      teamName={teamNameUIUX}
                      groupLink={
                        "https://chat.whatsapp.com/KMfV1b9VpTODBOG0l7VdOZ"
                      }
                    />
                  )}
                </div>
              ) : (
                <NotRegistered type={"kompetisi"} />
              )}
            </NoSSR>
          </div>
        </div>
      </LayoutMain>
    </>
  );
}

export default RequireLogin(Kompetisi);
