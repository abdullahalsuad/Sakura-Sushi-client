import React from "react";
import AddSushiForm from "./AddSushiForm";
import SushiList from "./SushiList";

const SushiDashboard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-8 col-span-1">
          <SushiList />
        </div>
        <div className="lg:col-span-4 col-span-1 ">
          <div className="sticky top-24">
            <AddSushiForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SushiDashboard;
