import AuthSidebar from "@/components/AuthSidebar";
import LayoutMain from "@/components/LayoutMain";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import NotRegistered from "@/components/organisms/Dashboard/NotRegistered";
import RegisteredCompetitions from "@/components/organisms/Dashboard/RegisteredCompetitions";
import { useUserStore } from "@/store/userStore";
import { getDataUser } from "@/utils/api";
import { useEffect } from "react";

export default function Kompetisi() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const getNewestDataUser = async () => {
      const { data } = await getDataUser();
      setUser(data);
      console.log(data);
    };
    getNewestDataUser();
  }, [setUser]);

  const isUserRegisteredWebDev =
    user?.registered?.competitions?.web_development;
  const isUserRegisteredCP =
    user?.registered?.competitions?.competitive_programming;
  const isUserRegisteredUIUX = user?.registered?.competitions?.uiux_design;

  const teamName = user?.registered?.competitions?.web_development?.team_name;

  return (
    <>
      <LayoutMain>
        <div className="flex flex-col lg:flex-row  w-full mx-auto mt-10 lg:gap-16 lg:w-[85%]">
          <div className="lg:w-[22rem] lg:mt-8">
            <AuthSidebar />
          </div>
          <div className="w-full md:mt-10 lg:mt-20">
            {isUserRegisteredWebDev ? (
              <RegisteredCompetitions
                type={"Web Development"}
                teamName={teamName}
              />
            ) : (
              <NotRegistered type={"kompetisi"} />
            )}
            {isUserRegisteredCP && (
              <RegisteredCompetitions
                type={"Competitive Programming"}
                teamName={teamName}
              />
            )}
            {isUserRegisteredUIUX && (
              <RegisteredCompetitions
                type={"Competitive Programming"}
                teamName={teamName}
              />
            )}
          </div>
        </div>
      </LayoutMain>
    </>
  );
}
