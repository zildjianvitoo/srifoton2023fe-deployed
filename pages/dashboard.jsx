import LayoutMain from "@/components/LayoutMain";
import RequireLogin from "@/components/HOC/WithAuth";

function Dashboard() {
  return <LayoutMain></LayoutMain>;
}

export default RequireLogin(Dashboard);
