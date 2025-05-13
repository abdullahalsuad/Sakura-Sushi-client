import React from "react";

const ReviewStatsSection = () => {
  return (
    <section className=" py-24 px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-gray-600">
          Join thousands of satisfied sushi lovers.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
        <div>
          <div className="text-4xl font-bold text-[#0B2B2B]">4.8</div>

          <p className="text-sm text-gray-600 mt-2">Average Rating</p>
        </div>

        <div>
          <div className="text-4xl font-bold text-[#0B2B2B]">2,500+</div>
          <p className="text-sm text-gray-600 mt-2">Customer Reviews</p>
        </div>

        <div>
          <div className="text-4xl font-bold text-[#0B2B2B]">10K+</div>
          <p className="text-sm text-gray-600 mt-2">Orders Delivered</p>
        </div>

        <div>
          <div className="text-4xl font-bold text-[#0B2B2B]">500+</div>
          <p className="text-sm text-gray-600 mt-2">Loyal Customers</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 mt-24">
        {[
          {
            name: "Emily R.",
            rating: 5,
            comment:
              "Absolutely amazing sushi! The Salmon Nigiri was fresh and flavorful. Will definitely come back!",
          },
          {
            name: "David M.",
            rating: 4,
            comment:
              "Great service and beautiful presentation. The rolls were tasty and the ambiance was peaceful.",
          },
          {
            name: "Sophia L.",
            rating: 5,
            comment:
              "One of the best sushi places I've ever been to. Highly recommend the California Roll!",
          },
        ].map((review, index) => (
          <div
            key={index}
            className="bg-[#F0FDFA] p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-l-4 border-[#0B2B2B] cursor-pointer"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                {review.name.charAt(0)}
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewStatsSection;
