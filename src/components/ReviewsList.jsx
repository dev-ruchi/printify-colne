import React from "react";
import ReviewCard from "./ReviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";


const ReviewsList = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      reviewText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      profilePic: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      name: "Jane Smith",
      rating: 4,
      reviewText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      profilePic: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      name: "Alice Johnson",
      rating: 5,
      reviewText:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      profilePic: "https://via.placeholder.com/150", // Placeholder image
    },
    {
        name: "Nancy Wheelar",
        rating: 5,
        reviewText:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        profilePic: "https://via.placeholder.com/150", // Placeholder image
      },
      {
        name: "Joyas Buyers",
        rating: 5,
        reviewText:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
        profilePic: "https://via.placeholder.com/150", // Placeholder image
      },
  ];

  return (
    <div className="p-24">
      {/* Use flex-row to arrange cards horizontally */}
      <div className="flex flex-row space-x-4 overflow-x-auto">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            reviewText={review.reviewText}
            profilePic={review.profilePic}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;
