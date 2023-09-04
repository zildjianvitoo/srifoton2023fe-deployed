import AuthSidebar from "@/components/AuthSidebar";
import LayoutMain from "@/components/LayoutMain";
import RequireLogin from "@/components/HOC/WithAuth";
import NotRegistered from "@/components/organisms/Dashboard/NotRegistered";
import { useUserStore } from "@/store/userStore";
import Head from "next/head";
import RegisteredActivity from "@/components/organisms/Dashboard/RegisteredActivity";

function Seminar() {
  const user = useUserStore((state) => state.user);

  console.log(user);

  return (
    <>
      <Head>
        <title>SRIFOTON | Dashboard Seminar</title>
      </Head>
      <LayoutMain>
        <div className="flex flex-col lg:flex-row  w-full mx-auto mt-10 lg:gap-16 lg:w-[85%]">
          <div className="lg:w-[22rem] lg:mt-8">
            <AuthSidebar />
          </div>
          <div className="w-full md:mt-10 lg:mt-20">
            {user.registered?.seminar ? (
              <RegisteredActivity
                type={"Seminar"}
                teamName={user.registered.seminar.name}
                isVerified={+user.registered.seminar.isVerified}
                groupLink={"https://chat.whatsapp.com/IvBdyVLsfCN2rgvToJVwUh"}
                registeredDate={user.registered.seminar.created_at}
              />
            ) : (
              <NotRegistered type={"seminar"} guideBookLink={"seminar"} />
            )}
          </div>
        </div>
      </LayoutMain>
    </>
  );
}

export default RequireLogin(Seminar);
