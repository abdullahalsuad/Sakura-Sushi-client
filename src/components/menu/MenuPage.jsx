import React, { use } from "react";
import { AllSushiDataContext } from "../../context/AllSushiProvider";
import Loading from "../Loading/Loading";
import { IoTimeOutline } from "react-icons/io5";
import { PiChefHat } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";

const MenuPage = () => {
  const { sushiData, loading } = use(AllSushiDataContext);

  if (loading) {
    return (
      <p>
        <Loading />
      </p>
    );
  }

  console.log(sushiData);

  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Sushi Menu
          </h2>

          {/* Menu Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sushiData.map((sushi) => (
              <div
                key={sushi._id}
                className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-gray-200"
              >
                {/* Image */}
                <div className="md:w-1/3 w-full h-48 md:h-auto">
                  <img
                    src={sushi.photoUrl}
                    alt={sushi.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {sushi.name}
                    </h3>
                    <p className="mt-2 text-blue-950 flex items-center gap-2 text-[17px]">
                      <PiChefHat />
                      {sushi.chef}
                    </p>
                    <p className="mt-2 text-blue-950 flex items-center gap-2 text-[17px]">
                      <IoTimeOutline /> {sushi.cookTime} Minute
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-[#0B2B2B] flex items-center ">
                      <TfiMoney /> {sushi.price}
                    </span>
                    <button className="bg-[#0B2B2B] hover:bg-teal-800 text-white px-4 py-2 rounded-md transition cursor-pointer">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
