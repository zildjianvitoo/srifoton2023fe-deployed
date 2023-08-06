import LayoutMain from "@/components/LayoutMain";
import RequireLogin from "@/components/HOC/WithAuth";
import Navbar from "@/components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <LayoutMain></LayoutMain>
    </>
  );
}

export default RequireLogin(Dashboard);
