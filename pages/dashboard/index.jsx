import LayoutMain from "@/components/LayoutMain";
import RequireLogin from "@/components/HOC/WithAuth";
import Navbar from "@/components/Navbar";
import AuthSidebar from "@/components/AuthSidebar";
import LayoutCredentials from "@/components/organisms/Credentials/LayoutCredentials";

function Dashboard() {
  return (
    <>
      <Navbar />
      <LayoutMain>
        <section id="data-diri">
          <div className="flex w-full lg:w-4/5">
            <AuthSidebar />
            <LayoutCredentials></LayoutCredentials>
          </div>
        </section>
      </LayoutMain>
    </>
  );
}

export default RequireLogin(Dashboard);
