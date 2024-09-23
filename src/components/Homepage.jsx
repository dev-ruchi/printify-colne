import React from "react";
import Reviews from "./Reviews";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mt-40 bg-slate-50">
        {[
          {
            img: "https://printify.com/pfh/assets/legacy/custom-products.png",
            title: "CREATE",
            subtitle: "custom products",
            description:
              "Easily add your designs to a wide range of products using our free tools.",
          },
          {
            img: "https://printify.com/pfh/assets/legacy/your-products.png",
            title: "SELL",
            subtitle: "on your terms",
            description:
              "You choose the products, sale price, and where to sell.",
          },
          {
            img: "https://printify.com/pfh/assets/legacy/fullfillment.png",
            title: "WE HANDLE",
            subtitle: "fulfilment",
            description:
              "Once an order is placed, we automatically handle all the printing and delivery logistics.",
          },
        ].map(({ img, title, subtitle, description }) => (
          <div className="flex flex-col items-center text-center" key={title}>
            <img src={img} alt={`${title} Icon`} className="w-40 mb-4" />
            <div>
              <h1 className="text-xl font-bold mb-2 text-green-600">{title}</h1>
              <h1 className="text-xl font-bold mb-4">{subtitle}</h1>
              <p className="text-gray-600 max-w-xs">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-600 p-6 rounded-lg shadow-lg mt-32 flex items-center justify-between flex-col md:flex-row">
        <p className="text-xl font-semibold text-green-800 mb-4 md:mb-0">
          Are you a large business looking for custom solutions?
        </p>
        <button className="border-2 bg-white py-2 px-4 rounded-md hover:bg-green-700 transition-all">
          Talk to sales
        </button>
      </div>

      <Reviews />
    </>
  );
};

export default Homepage;
