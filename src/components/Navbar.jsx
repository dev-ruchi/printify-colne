import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md mb-16">
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
          <button className="btn btn-primary mr-4 text-xl px-6 py-2 border-2 rounded my-4 border-gray-400  hover:text-green-600">
            Log in
          </button>
          <button className="btn btn-primary text-white text-xl px-6 py-2 rounded my-4 bg-green-600 hover:bg-green-600">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
