import React from "react";
// import SideNav from "../sidenav/SideNav";
import SideNavBar from "../sidenavbar/SideNavBar";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container-fluid g-0">
      {/* <SideNav /> */}
      <SideNavBar />
    </div>
  );
};

export default MainLayout;
