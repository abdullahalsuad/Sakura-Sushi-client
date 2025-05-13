import React, { useState } from "react";

const AddSushiForm = () => {
  const [form, setForm] = useState({
    name: "",
    chef: "",
    photoUrl: "",
    price: "",
    cookTime: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Sushi Added:", form);
    alert("Sushi added successfully!");
  };

  return (
    <div className=" min-h-screen py-12 px-4 ">
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
              value={form.name}
              onChange={handleChange}
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
              value={form.chef}
              onChange={handleChange}
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
              value={form.photoUrl}
              onChange={handleChange}
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
              value={form.price}
              onChange={handleChange}
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
              value={form.cookTime}
              onChange={handleChange}
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
              value={form.details}
              onChange={handleChange}
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
