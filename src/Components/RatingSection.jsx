import React from "react";

const RatingSection = ({ inputValue }) => {
  const rating = Math.round(inputValue);
  const maxRating = 10;
  const stars = [];

  // Create an array of stars based on the input value
  for (let i = 0; i < maxRating; i++) {
    if (i < rating) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-yellow-500"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 17.27l5.19 3.26-1.57-6.09L22 9.24l-6.47-.48L12 3 9.47 8.76 3 9.24l4.38 4.22L6.81 20.53 12 17.27zm0 0v6.73L9.42 20 3 18.2l4.05-3.91-1.19-4.61L9.42 8l2.83-6.89L15 8l3.92 1.28L18 18.21 12 24zm0 0"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-gray-300"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 17.27l5.19 3.26-1.57-6.09L22 9.24l-6.47-.48L12 3 9.47 8.76 3 9.24l4.38 4.22L6.81 20.53 12 17.27zm0 0v6.73L9.42 20 3 18.2l4.05-3.91-1.19-4.61L9.42 8l2.83-6.89L15 8l3.92 1.28L18 18.21 12 24zm0 0"
          />
        </svg>
      );
    }
  }

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="text-gray-600 text-sm">{inputValue}/10</span>
    </div>
  );
};

export default RatingSection;
