import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="py-20 text-center md:text-left">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center mt-8 ml-12">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold">
              Create and sell coustom products
            </h1>
            <div>
              <p className="mt-8 text-lg text-gray-600">100% Free to use</p>
              <p className="mt-2 text-lg text-gray-600">
                900+ High Quality products
              </p>
              <p className="mt-2 text-lg text-gray-600">
                Largest print global network
              </p>
            </div>
            <div className="flex items-center">
              <button className="btn mr-4 text-white text-lg px-6 py-2 border rounded my-4 bg-green-600">
                Start for free
              </button>
              <button className="py-2.5 px-6 border rounde border-gray-200">
               How it's works?
              </button>
            </div>
            <p className="text-green-600">Trusted by over 8M sellers around the world</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://printify.com/pfh/assets/animations/images/img_5.png"
              alt="Print-on-demand illustration"
              className="w-80 boreder border-2 rounded-xl p-4 h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
