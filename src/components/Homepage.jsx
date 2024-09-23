import React from "react";
import Reviews from "./Reviews";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mt-40 bg-slate-50">
        <div className="flex flex-col items-center">
          <img
            src="https://printify.com/pfh/assets/legacy/custom-products.png"
            alt="Higher Profits Icon"
            className="w-40 mr-32 mb-8"
          />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-4 text-green-600">CREATE</h1>
            <h1 className="text-xl font-bold mb-4">custom products</h1>
            <p className="text-gray-600 max-w-xs">
              Easily add your designs to a wide range of products using our free
              tools
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://printify.com/pfh/assets/legacy/your-products.png"
            alt="Robust Scaling Icon"
            className="w-40 mr-48 mb-8"
          />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-4 text-green-600">SELL</h1>
            <h1 className="text-xl font-bold mb-4">on your terms</h1>
            <p className="text-gray-600 max-w-xs">
              You choose the products, sale price, and where to sell
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://printify.com/pfh/assets/legacy/fullfillment.png"
            alt="Best Selection Icon"
            className="w-40 mr-40 mb-8"
          />
          <div className="text-left">
            <h1 className="text-xl font-bold mb-2 text-green-600">WE HANDLE</h1>
            <h1 className="text-xl font-bold mb-4">fulfilment</h1>
            <p className="text-gray-600 max-w-xs">
              Once an order is placed, we automatically handle all the printing
              and delivery logistics
            </p>
          </div>
        </div>
      </div>
      <div class="bg-gradient-to-r from-green-100 via-green-200 to-green-600 p-6 rounded-lg shadow-lg mt-32 flex items-center justify-between">
        <p class="text-xl font-semibold text-green-800 ml-4">
          Are you a large business looking for custom solutions?
        </p>
        <button class="border-2 bg-white py-2 px-4 my-8 mr-16 rounded-md hover:bg-green-700 transition-all">
          Talk to sales
        </button>
      </div>
      <Reviews />
    </>
  );
};

export default Homepage;
