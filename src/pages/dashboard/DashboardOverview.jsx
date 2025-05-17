import React from "react";

const DashboardOverview = () => {
  return (
    <>
      <div className="">
        {/* Page content goes here */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-teal-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-teal-700">
              Total Sushi Items
            </h2>
            <p className="text-3xl font-bold text-teal-800">120</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-purple-700">
              Total Orders
            </h2>
            <p className="text-3xl font-bold text-purple-800">345</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-blue-700">New Users</h2>
            <p className="text-3xl font-bold text-blue-800">23</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
