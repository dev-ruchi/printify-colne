import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="navbar bg-white shadow-md mb-16 sticky top-0 z-10">
      <div className="flex justify-between items-center w-full px-8">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="btn btn-ghost text-3xl font-bold text-green-500"
          >
            Printify
          </Link>
        </div>

        {/* Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex gap-8 items-center text-lg text-gray-600">
          <Link to="/catalog" className="hover:text-green-500">
            Catalog
          </Link>

          {/* How It Works Dropdown */}
          <div
            onMouseEnter={() => handleDropdownToggle("howItWorks")}
            onMouseLeave={() => handleDropdownToggle(null)}
            className="relative inline-block text-left"
          >
            <Link
              to="/how-it-works"
              className="flex items-center hover:text-green-500"
            >
              How it works
              <ChevronDownIcon className="ml-1 w-5 h-5" />
            </Link>
            {openDropdown === "howItWorks" && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    to="/how-it-works/printify-works"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    How Printify Works
                  </Link>
                  <Link
                    to="/how-it-works/print-on-demand"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Print On Demand
                  </Link>
                  <Link
                    to="/how-it-works/quality-promise"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Printify Quality Promise
                  </Link>
                  <Link
                    to="/how-it-works/what-to-sell"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    What to Sell
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/pricing" className="hover:text-green-500">
            Pricing
          </Link>
          <Link to="/blog" className="hover:text-green-500">
            Blog
          </Link>

          {/* Services Dropdown */}
          <div
            onMouseEnter={() => handleDropdownToggle("services")}
            onMouseLeave={() => handleDropdownToggle(null)}
            className="relative inline-block text-left"
          >
            <Link
              to="/services"
              className="flex items-center hover:text-green-500"
            >
              Services
              <ChevronDownIcon className="ml-1 w-5 h-5" />
            </Link>
            {openDropdown === "services" && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    to="/services/printify-studio"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Printify Studio
                  </Link>
                  <Link
                    to="/services/express-delivery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Printify Express Delivery
                  </Link>
                  <Link
                    to="/services/transfer-products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Transfer Products
                  </Link>
                  <Link
                    to="/services/order-in-bulk"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Order In Bulk
                  </Link>
                  <Link
                    to="/services/experts-program"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Experts Program
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Use-cases Dropdown */}
          <div
            onMouseEnter={() => handleDropdownToggle("useCases")}
            onMouseLeave={() => handleDropdownToggle(null)}
            className="relative inline-block text-left"
          >
            <Link
              to="/use-cases"
              className="flex items-center hover:text-green-500"
            >
              Use-cases
              <ChevronDownIcon className="ml-1 w-5 h-5" />
            </Link>
            {openDropdown === "useCases" && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    to="/use-cases/merch-for-fans"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Merch for Fans
                  </Link>
                  <Link
                    to="/use-cases/merch-for-ecommerce"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Merch for eCommerce
                  </Link>
                  <Link
                    to="/use-cases/merch-for-eneterprises"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Merch for Enterprises
                  </Link>
                  <Link
                    to="/use-cases/gorw-your-store"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Grow Your Store
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Need Help Dropdown */}
          <div
            onMouseEnter={() => handleDropdownToggle("NeedHelp")}
            onMouseLeave={() => handleDropdownToggle(null)}
            className="relative inline-block text-left"
          >
            <Link
              to="/need-help"
              className="flex items-center hover:text-green-500"
            >
              Need Help?
              <ChevronDownIcon className="ml-1 w-5 h-5" />
            </Link>
            {openDropdown === "NeedHelp" && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link
                    to="/need-help/help-center"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Help Center
                  </Link>
                  <Link
                    to="/need-help/contacts"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Contacts
                  </Link>
                  <Link
                    to="/need-help/my-requests"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Requests
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center">
          <button className="py-2.5 px-5 me-2 my-4 font-medium text-gray-900 focus:outline-none text-sm bg-white rounded border border-gray-200 focus:ring-4 focus:ring-green-300 hover:text-green-600">
            Log in
          </button>
          <button className="focus:outline-none text-sm text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded  px-5 py-2.5 me-2 my-2">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
