import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Homepage from "./Homepage";

const HeroSection = () => {
  return (
    <div>
      <section className="text-center md:text-left">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center mt-8 ml-12">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold">
              Create and sell coustom products
            </h1>
            <div>
              <p className="mt-8 text-lg text-gray-600 flex items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-2 text-green-600"
                />
                100% Free to use
              </p>
              <p className="mt-2 text-lg text-gray-600 flex items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-2 text-green-600"
                />
                900+ High Quality products
              </p>
              <p className="mt-2 text-lg text-gray-600 flex items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-2 text-green-600"
                />
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
            <p className="text-green-600">
              Trusted by over 8M sellers around the world
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="/tshirt.png" alt="T-shirt" className="p-4 h-auto" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mt-40">
          <div className="flex flex-col items-center">
            <img
              src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
              alt="Higher Profits Icon"
              className="w-28 mr-24 mb-8"
            />
            <div className="flex flex-col ml-24 self-start">
              <h1 className="text-xl font-bold mb-4">Higher Profits</h1>
              <p className="text-gray-600 max-w-xs">
                We offer some of the lowest prices in the industry because print
                providers continuously compete to win your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
              alt="Robust Scaling Icon"
              className="w-28 mr-24 mb-8"
            />
            <div className="flex flex-col ml-24 self-start">
              <h1 className="text-xl font-bold mb-4">Robust Scaling</h1>
              <p className="text-gray-600 max-w-xs mx-auto">
                Easily handle peak holiday seasons, with our wide network of
                partners and automatic routing functionality.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://printify.com/pfh/assets/legacy/best-selection.svg"
              alt="Best Selection Icon"
              className="w-28 mr-24 mb-8"
            />
            <div className="flex flex-col ml-24 self-start">
              <h1 className="text-xl font-bold mb-4">Best Selection</h1>
              <p className="text-gray-600 max-w-xs mx-auto">
                With 900+ products and top quality brands, you can choose the
                best products for your business.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-52">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://miro.medium.com/v2/resize:fit:1234/1*79g_OzD8-asJ56wPOtzATg.jpeg"
              alt="Print-on-demand illustration"
              className="border relative ml-14 rounded-3xl h-auto"
            />
          </div>
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center mt-8 ml-12">
            <div className="md:w-1/2 ml-32">
              <h1 className="text-3xl font-bold">
                Easily add your design to a wide range of products
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>
              <p className="text-green-600 mt-12">
                All products{" "}
                <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </p>
            </div>
          </div>
        </div>
      </section>
      <Homepage />
    </div>
  );
};

export default HeroSection;
