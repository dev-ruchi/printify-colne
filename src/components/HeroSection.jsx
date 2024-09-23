import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Homepage from "./Homepage";

const HeroSection = () => {
  return (
    <div>
    <section className="text-center md:text-left">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center mt-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">
            Create and sell custom products
          </h1>
          <div className="mt-8">
            <p className="text-lg text-gray-600 flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
              100% Free to use
            </p>
            <p className="mt-2 text-lg text-gray-600 flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
              900+ High Quality products
            </p>
            <p className="mt-2 text-lg text-gray-600 flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-600" />
              Largest print global network
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4">
            <button className="btn text-white text-lg px-6 py-2 border rounded my-4 bg-green-600 mr-0 md:mr-4">
              Start for free
            </button>
            <button className="py-2.5 px-6 border rounded border-gray-200">
              How it works?
            </button>
          </div>
          <p className="text-green-600 mt-4">
            Trusted by over 8M sellers around the world
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/tshirt.png" alt="T-shirt" className="p-4 h-auto" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mt-24">
        {[
          {
            imgSrc: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
            title: "Higher Profits",
            description: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
          },
          {
            imgSrc: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
            title: "Robust Scaling",
            description: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
          },
          {
            imgSrc: "https://printify.com/pfh/assets/legacy/best-selection.svg",
            title: "Best Selection",
            description: "With 900+ products and top quality brands, you can choose the best products for your business."
          },
        ].map(({ imgSrc, title, description }) => (
          <div className="flex flex-col items-center" key={title}>
            <img src={imgSrc} alt={`${title} Icon`} className="w-28 mb-4" />
            <div className="flex flex-col text-center">
              <h1 className="text-xl font-bold mb-2">{title}</h1>
              <p className="text-gray-600 max-w-xs">{description}</p>
            </div>
          </div>
        ))}
      </div>
  
      <div className="flex flex-col md:flex-row mt-32 bg-slate-50">
        <div className="md:w-1/2">
          <img
            src="https://miro.medium.com/v2/resize:fit:1234/1*79g_OzD8-asJ56wPOtzATg.jpeg"
            alt="Print-on-demand illustration"
            className="border relative my-16 mx-auto rounded-3xl h-auto"
          />
        </div>
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center mt-8 md:mt-0">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">
              Easily add your design to a wide range of products
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <p className="text-green-600 mt-12">
              All products{" "}
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </p>
          </div>
        </div>
      </div>
      <Homepage />
    </section>
  </div>
  
  );
};

export default HeroSection;
