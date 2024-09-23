import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        {/* Navigation Links */}
        <div className="flex gap-8 items-center text-lg text-gray-600">
          <Link to="/catalog" className="hover:text-green-500">
            Catalog
          </Link>
          <Link to="/how-it-works" className="hover:text-green-500">
            How it works
          </Link>
          <Link to="/pricing" className="hover:text-green-500">
            Pricing
          </Link>
          <Link to="/blog" className="hover:text-green-500">
            Blog
          </Link>
          <Link to="/services" className="hover:text-green-500">
            Services
          </Link>
          <Link to="/use-cases" className="hover:text-green-500">
            Use-cases
          </Link>
          <Link to="/help" className="hover:text-green-500">
            Need help?
          </Link>
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
