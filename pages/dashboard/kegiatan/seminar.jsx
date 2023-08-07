import AuthSidebar from "@/components/AuthSidebar";
import LayoutMain from "@/components/LayoutMain";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";
import NotRegistered from "@/components/organisms/Dashboard/NotRegistered";
import { useUserStore } from "@/store/userStore";

export default function Seminar() {
  const user = useUserStore((state) => state.user);

  console.log(user);

  return (
    <>
      <LayoutMain>
        <div className="flex flex-col lg:flex-row  w-full mx-auto mt-10 lg:gap-16 lg:w-[85%]">
          <div className="lg:w-[22rem] lg:mt-8">
            <AuthSidebar />
          </div>
          <div className="w-full md:mt-10 lg:mt-20">
            <NotRegistered type={"seminar"} />
          </div>
        </div>
      </LayoutMain>
    </>
  );
}
