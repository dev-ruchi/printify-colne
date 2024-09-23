import React from "react";
import ReviewsList from "./ReviewsList";
import Footer from "./Footer";

const Reviews = () => {
  return (
    <>
      <div className="bg-slate-100 mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between pt-32 p-6 bg-gray-100 rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 max-w-lg mb-4 md:mb-0 ml-4 md:ml-16">
            Trusted by over 8M sellers around the world
          </h1>
          <p className="text-gray-600 max-w-md pt-4 md:pt-12 mr-4 md:mr-40">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
        <ReviewsList />
      </div>

      <div className="flex flex-col md:flex-row items-center m-8 md:m-32">
        <div className="bg-[#072733] text-white p-6 md:p-16 max-w-xl mx-auto rounded-lg shadow-lg mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make Money, Risk-Free
          </h2>
          <p className="my-6">
            You pay for fulfillment only when you make a sale.
          </p>

          <div className="bg-[#081F27] p-6 md:p-16 rounded-lg mb-4">
            <div className="flex justify-between items-center space-x-8">
              <h3 className="my-2">You sell a t-shirt</h3>
              <p>$30</p>
            </div>

            <div className="flex justify-between items-center space-x-8">
              <h3 className="my-2">You pay for its production</h3>
              <p>$12</p>
            </div>

            <hr className="my-4 border-gray-700" />

            <div className="flex justify-between items-center space-x-8">
              <h3 className="text-xl text-green-600 font-semibold my-2">
                Your profit
              </h3>
              <p className="text-xl text-green-600 font-bold">$18</p>
            </div>
          </div>

          <button className="bg-green-600 p-2 rounded-lg my-4 w-full">
            Start selling
          </button>
          <p className="mt-4 text-sm text-gray-400 text-center">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/girl.jpeg" alt="T-shirt" className="rounded-lg" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Reviews;
