import React, { use } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AllSushiDataContext } from "../../context/AllSushiProvider";
import Loading from "../Loading/Loading";

const SushiUpdate = () => {
  const { sushiData, loading } = use(AllSushiDataContext);
  const navigate = useNavigate();

  let { id } = useParams();

  if (loading) {
    return <Loading />;
  }

  const sortedSushi = sushiData.find((sushi) => {
    return sushi._id === id;
  });

  // update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateSushi = Object.fromEntries(formData.entries());
    console.log(updateSushi);

    //send to backend
    try {
      const response = await fetch(`http://localhost:3000/sushi/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateSushi),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const modifiedSushi = await response.json();
      console.log(modifiedSushi);

      if (modifiedSushi.modifiedCount) {
        console.log("sushi updated:", modifiedSushi);
        toast.success("Sushi updated successfully!");
        navigate("/menu");
      }
    } catch (error) {
      console.log("error from sending data to the server", error);
    }
  };

  return (
    <>
      <div className=" min-h-screen px-4 mt-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center text-[#0B2B2B] mb-6">
            Update
          </h2>
          <form onSubmit={handleUpdate} className="space-y-5">
            {/* Sushi Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sushi Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={sortedSushi.name}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0B2B2B] focus:border-transparent"
                required
              />
            </div>

            {/* Chef Name */}
            <div>
              <label
                htmlFor="chef"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Chef Name
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                defaultValue={sortedSushi.chef}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0B2B2B] focus:border-transparent"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoUrl"
                name="photoUrl"
                defaultValue={sortedSushi.photoUrl}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0B2B2B] focus:border-transparent"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                defaultValue={sortedSushi.price}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0B2B2B] focus:border-transparent"
                required
              />
            </div>

            {/* Cook Time */}
            <div>
              <label
                htmlFor="cookTime"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cook Time
              </label>
              <input
                type="text"
                id="cookTime"
                name="cookTime"
                defaultValue={sortedSushi.cookTime}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0B2B2B] focus:border-transparent"
                required
              />
            </div>

            {/* Details / Description */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Details / Description
              </label>
              <textarea
                id="details"
                name="details"
                rows="4"
                defaultValue={sortedSushi.details}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0B2B2B] focus:border-transparent"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#0B2B2B] hover:bg-teal-800 text-white font-semibold py-3 rounded-md transition"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SushiUpdate;
