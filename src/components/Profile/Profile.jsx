import React from "react";

const Profile = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-teal-50 ">
      <div className=" px-4 py-12 w-5/12 mx-auto">
        <div className=" bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-teal-700 h-24"></div>

          <div className="px-6 -mt-12">
            <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-300 mx-auto bg-cover bg-center"></div>

            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
              <p className="text-sm text-gray-500">+123 456 7890</p>
            </div>
          </div>

          <div className="px-6 pt-4 pb-8">
            <button className="w-full py-2 px-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg transition duration-200">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* edit profile */}
      <div className="w-5/12 mx-auto px-4 py-12">
        <div className=" bg-white rounded-xl shadow-lg p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-teal-700">
            Edit Profile
          </h2>

          <form className="space-y-6">
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-300 bg-cover bg-center mb-4"></div>
              <label
                htmlFor="profilePic"
                className="text-sm text-gray-600 cursor-pointer underline"
              >
                Change Profile Picture
              </label>
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue="+123 456 7890"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email (Read-only) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="john.doe@example.com"
                readOnly
                className="w-full px-4 py-2 border border-gray-200 bg-gray-100 rounded-lg text-gray-600 cursor-not-allowed"
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
