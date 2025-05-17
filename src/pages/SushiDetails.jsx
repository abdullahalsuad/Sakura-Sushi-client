import React from "react";

const SushiDetails = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="h-96 w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/11899612/pexels-photo-11899612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
            alt="Salmon Nigiri"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            {/* title and time */}
            <h1 className="text-3xl font-bold text-gray-900">Salmon Nigiri</h1>

            <span className="bg-[#0B2B2B] text-white text-sm px-3 py-1 rounded-full">
              ⏱️ 5 mins
            </span>
          </div>

          {/* Info Badges */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* chef name */}
            <div className="bg-white p-3 rounded-md shadow-sm flex items-center gap-2">
              <span className="text-gray-600">👨‍🍳</span>
              <span className="text-gray-700"> Hiro Tanaka</span>
            </div>
            {/* price */}
            <div className="bg-white p-3 rounded-md shadow-sm flex items-center gap-2">
              <span className="font-semibold text-[#0B2B2B]">$6.50</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8">
            Fresh Atlantic salmon sliced over vinegared sushi rice with a touch
            of wasabi. Smooth texture and buttery flavor. Served chilled.
          </p>

          {/* Order Button */}
          <div className="flex justify-end">
            <button className="bg-[#0B2B2B] hover:bg-teal-800 text-white px-6 py-3 rounded-lg shadow-md transition cursor-pointer">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SushiDetails;
