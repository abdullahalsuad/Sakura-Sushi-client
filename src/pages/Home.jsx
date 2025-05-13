import React from "react";
import ReviewStatsSection from "../components/review/ReviewStatsSecti";
import HomeMenu from "../components/homemenu/HomeMenu";

const Home = () => {
  return (
    <div className=" text-gray-800 ">
      {/* Hero Section */}
      <section className="relative bg-teal-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Welcome to{" "}
              <span className="text-4xl font-bold text-[#0B2B2B] cursor-pointer">
                Sakura Sushi
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Handcrafted sushi made with love. Experience the taste of
              tradition in every bite.
            </p>
            <div className="mt-6 space-x-4">
              <a
                href="/menu"
                className="inline-block bg-[#0B2B2B] hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-md transition"
              >
                View Menu
              </a>
              <a
                href="/about"
                className="inline-block border border-[#0B2B2B] text-[#0B2B2B] hover:bg-teal-50 font-semibold py-3 px-6 rounded-md transition"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.pexels.com/photos/10692516/pexels-photo-10692516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
              alt="Sushi Platter"
              className="rounded-lg shadow-lg w-full max-w-md object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Featured Sushi Section */}
      <div className="my-10">
        <HomeMenu />
      </div>

      {/* Call to Action */}
      <section className="bg-[#0B2B2B] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Taste?</h2>
        <p className="text-lg mb-6">
          Order now or visit us to experience the finest sushi in town.
        </p>
        <a
          href="/menu"
          className="inline-block bg-white text-[#0B2B2B] font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition"
        >
          Order Now
        </a>
      </section>

      {/* review section */}
      <section>
        <ReviewStatsSection />
      </section>
    </div>
  );
};

export default Home;
