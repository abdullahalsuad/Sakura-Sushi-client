import React, { use } from "react";
import { AllSushiDataContext } from "../../context/AllSushiProvider";
import Loading from "../Loading/Loading";
import { PiChefHat } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import { IoTimeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";

const SushiList = () => {
  const { sushiData, loading } = use(AllSushiDataContext);

  if (loading) {
    return <Loading />;
  }

  const handleClick = async (id) => {
    console.log(id);

    // alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
     
      console.log(result.isConfirmed);

      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:3000/sushi/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            Swal.fire({
              title: "Deleted!",
              text: "Your sushi has been deleted.",
              icon: "success",
            });
          } else {
            console.error("Failed to delete");
          }
        } catch (error) {
          console.log("Error from deleting sushi", error);
        }
      }
    });
  };

  return (
    <>
      <section className="bg-white py-16 px-4">
        {/* Menu Grid - 2 Columns */}
        <div className="space-y-4">
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

              {/* Info + Action Buttons */}
              <div className="flex flex-1 flex-col md:flex-row md:items-center justify-between p-4 gap-4">
                {/* Info */}
                <div className="flex-1">
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
                  <div className="mt-4">
                    <span className="text-lg font-bold text-[#0B2B2B] flex items-center gap-1">
                      <TfiMoney /> {sushi.price}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 items-end">
                  <button className="bg-[#0B2B2B] hover:bg-teal-800 text-white px-4 py-4 rounded-md transition cursor-pointer">
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleClick(sushi._id)}
                    className="bg-[#ff5a5a] hover:bg-teal-800 text-white px-4 py-4 rounded-md transition cursor-pointer"
                  >
                    <MdOutlineDelete size={20} />
                  </button>
                  <button className="bg-[#0B2B2B] hover:bg-teal-800 text-white px-4 py-4 rounded-md transition cursor-pointer">
                    <FiEdit size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SushiList;
