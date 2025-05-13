import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-teal-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About Sakura Sushi
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just a sushi restaurant — we're a celebration of Japanese
            culinary art. Every piece is crafted with care, using the freshest
            ingredients and traditional techniques.
          </p>
          <a
            href="/menu"
            className="mt-6 inline-block bg-[#0B2B2B] hover:bg-teal-800 text-white py-2 px-6 rounded-md transition"
          >
            View Our Menu
          </a>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              At Sakura Sushi, we believe in the harmony of taste, texture, and
              presentation. Our chefs are trained in Japan and bring years of
              experience to every plate they create.
            </p>
            <p className="text-gray-600 mb-6">
              From classic rolls to unique creations, our menu is designed to
              delight both seasoned sushi lovers and those trying it for the
              first time.
            </p>
            <a className="inline-block text-[#0B2B2B] border border-[#0B2B2B] px-6 py-2 rounded-md hover:bg-teal-50 transition cursor-pointer">
              Contact Us
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/28992215/pexels-photo-28992215/free-photo-of-assorted-sushi-platter-with-salmon-and-rolls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sushi Chef"
              className="rounded-lg shadow-md w-full max-w-md object-cover h-80"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We source only the highest quality fish and produce daily to
                ensure freshness in every bite.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Skilled Chefs
              </h3>
              <p className="text-gray-600">
                Our team has trained in Tokyo and brings authentic Japanese
                sushi-making skills to your plate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Elegant Experience
              </h3>
              <p className="text-gray-600">
                Enjoy a serene ambiance that complements our refined dishes and
                exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Are In Numbers */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            We Are In Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#0B2B2B]">10K+</div>
              <p className="text-gray-600 mt-2">Orders Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0B2B2B]">2,500+</div>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0B2B2B]">50+</div>
              <p className="text-gray-600 mt-2">Sushi Varieties</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0B2B2B]">10</div>
              <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
