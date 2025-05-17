import React, { use } from "react";
import { AllSushiDataContext } from "../../../context/AllSushiProvider";
import Loading from "../../../components/Loading/Loading";
import { PiChefHat } from "react-icons/pi";
import { TfiMoney } from "react-icons/tfi";
import { IoTimeOutline } from "react-icons/io5";
import { FiEdit, FiEye } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router";

const SushiList = () => {
  const { sushiData, loading, setSushiData } = use(AllSushiDataContext);

  if (loading) {
    return <Loading />;
  }

  // handle delete
  const handleDelete = async (id) => {
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
          const response = await fetch(
            `https://sakura-sushi-server.vercel.app/sushi/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          // Remove from UI
          setSushiData((prev) => prev.filter((sushi) => sushi._id !== id));
          if (response.ok) {
            toast.success("Sushi deleted successfully");
          }
        } catch (error) {
          console.log("Error from deleting sushi", error);
        }
      }
    });
  };

  return (
    <>
      <section className="bg-white  px-4">
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
                  <Link to={`/sushi/update/${sushi._id}`}>
                    <button className="bg-[#0B2B2B] hover:bg-teal-800 text-white px-4 py-4 rounded-md transition cursor-pointer">
                      <FiEdit size={20} />
                    </button>
                  </Link>

                  <Link to={`/sushi/${sushi._id}`}>
                    <button
                      // onClick={() => handleView(sushi._id)}
                      className="bg-[#0B2B2B] hover:bg-teal-800 text-white px-4 py-4 rounded-md transition cursor-pointer"
                    >
                      <FiEye size={20} />
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(sushi._id)}
                    className="bg-[#ff5a5a] hover:bg-teal-800 text-white px-4 py-4 rounded-md transition cursor-pointer"
                  >
                    <MdOutlineDelete size={20} />
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
