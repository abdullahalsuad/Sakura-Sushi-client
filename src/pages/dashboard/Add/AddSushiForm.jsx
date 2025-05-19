import React, { use } from "react";
import { toast } from "react-toastify";
import { AllSushiDataContext } from "../../../context/AllSushiProvider";

const AddSushiForm = () => {
  const { setSushiData } = use(AllSushiDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newSushiData = Object.fromEntries(formData.entries());
    console.log(newSushiData);

    // send data to the backend
    try {
      const response = await fetch(
        "https://sakura-sushi-server.vercel.app/api/sushi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSushiData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const createSushi = await response.json();
      if (createSushi.insertedId) {
        console.log("sushi added:", createSushi);
        toast.success("Sushi added successfully!");

        //ui update
        newSushiData._id = createSushi.insertedId;
        setSushiData((prev) => [...prev, newSushiData]);
        e.target.reset();
      }
    } catch (error) {
      console.log("error from sending data to the server", error);
    }
  };

  return (
    <div className="  px-4 ">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-[#0B2B2B] mb-6">
          Add New Sushi
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="e.g., Salmon Nigiri"
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
              placeholder="e.g., Chef Haruto"
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
              placeholder="https://example.com/sushi.jpg "
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
              placeholder="$8"
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
              placeholder="e.g., 15 minutes"
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
              placeholder="Describe the sushi ingredients and preparation..."
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
              Add Sushi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSushiForm;
