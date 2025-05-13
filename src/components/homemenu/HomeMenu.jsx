import React from "react";
import { Link } from "react-router";

const menuItems = [
  {
    id: 1,
    name: "Tuna Roll",
    price: "$7",
    description: "Classic tuna roll wrapped in seaweed and rice.",
    image:
      "https://images.pexels.com/photos/7576028/pexels-photo-7576028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
  },
  {
    id: 2,
    name: "Salmon Nigiri",
    price: "$8",
    description: "Fresh salmon slices over seasoned rice.",
    image:
      "https://images.pexels.com/photos/7719912/pexels-photo-7719912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
  },
  {
    id: 3,
    name: "California Roll",
    price: "$9",
    description: "Crab, avocado, and cucumber rolled with rice and seaweed.",
    image:
      "https://images.pexels.com/photos/31393439/pexels-photo-31393439/free-photo-of-elegant-assorted-sushi-platter-on-dark-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
  },
  {
    id: 4,
    name: "Vegetable Maki",
    price: "$6",
    description: "Roll filled with fresh cucumber, avocado, and carrots.",
    image:
      "https://images.pexels.com/photos/28992215/pexels-photo-28992215/free-photo-of-assorted-sushi-platter-with-salmon-and-rolls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
  },
];

const HomeMenu = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Sushi Menu
        </h2>

        {/* Menu Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-gray-300"
            >
              {/* Image */}
              <div className="md:w-1/3 w-full h-48 md:h-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-[#0B2B2B]">
                    {item.price}
                  </span>
                  <button className="bg-[#0B2B2B] hover:bg-teal-800 text-white px-4 py-2 rounded-md transition cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-12">
          <Link
            to={"/menu"}
            className="inline-block bg-[#0B2B2B] hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            View Full Menu & Order
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
