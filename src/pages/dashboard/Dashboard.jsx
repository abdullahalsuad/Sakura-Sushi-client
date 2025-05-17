import React from "react";
import SideBar from "./SideBar";
import DashboardOverview from "./DashboardOverview";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <div className="w-10/12 mx-auto mt-10">
        <div className="grid grid-cols-[256px_1fr]">
          <SideBar />
          <div className="px-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
