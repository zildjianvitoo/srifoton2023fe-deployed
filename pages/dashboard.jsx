import LayoutMain from "@/components/LayoutMain";
import React from "react";
import RequireLogin from "@/components/HOC/WithAuth";

function Dashboard() {
  return <LayoutMain></LayoutMain>;
}

export default RequireLogin(Dashboard);
