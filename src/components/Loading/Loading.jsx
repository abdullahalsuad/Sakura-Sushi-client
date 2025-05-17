import React from "react";

const Loading = () => {
  return (
    <>
      <div className="mt-40">
        <div className="flex justify-center items-center h-full">
          <div className="relative w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-teal-200"></div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-teal-600 border-t-transparent animate-spin"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
