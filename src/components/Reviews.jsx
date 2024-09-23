import React from "react";
import ReviewsList from "./ReviewsList";

const Reviews = () => {
  return (
    <div className="bg-slate-100 mt-24">
      <div class="flex items-center justify-between pt-32 p-6 bg-gray-100 rounded-lg">
        <h1 class="text-4xl font-bold ml-16 text-gray-800 max-w-lg">
          Trusted by over 8M sellers around the world
        </h1>
        <p class="mr-40 text-gray-600 max-w-md pt-12">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </p>
      </div>
      <ReviewsList />
    </div>
  );
};

export default Reviews;
