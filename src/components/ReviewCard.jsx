import React from "react";

const ReviewCard = ({ name, rating, reviewText, profilePic }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 mt-6 mb-4 max-w-xs md:max-w-md mx-auto">
      <div className="flex flex-col md:flex-row items-center mb-4">
        <img
          src={profilePic}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full mb-2 md:mb-0 md:mr-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>
      <div className="flex items-center mb-2">
        <div className="text-yellow-500">
          {/* Render star rating */}
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? "text-yellow-500" : "text-gray-300"}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm md:text-base">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
