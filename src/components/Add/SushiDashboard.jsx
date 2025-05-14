import React from "react";
import AddSushiForm from "./AddSushiForm";
import SushiList from "./SushiList";

const SushiDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 w-10/12 mx-auto">
        <div className="md:col-span-8">
          <SushiList />
        </div>
        <div className="md:col-span-4">
          <div className="sticky top-24">
            <AddSushiForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SushiDashboard;
