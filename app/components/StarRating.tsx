import React from "react";

interface StarRatingProps {
  rating: number; // The rating value (e.g., 4.3)
  totalStars?: number; // Optional: Number of total stars, defaults to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  // This function returns the class for the individual star based on the index
  const getStarFill = (starIndex: number): string => {
    if (rating >= starIndex + 1) {
      return "100%"; // Fully filled star
    } else if (rating > starIndex) {
      const partialFill = (rating - starIndex) * 100; // Calculate partial fill
      return `${partialFill}%`; // Return the percentage
    } else {
      return "0%"; // Not filled star
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[...Array(totalStars)].map((_, index) => (
        <div
          key={index}
          style={{
            width: "24px",
            height: "24px",
            marginRight: "5px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#e0e0e0",
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              overflow: "hidden",
            }}
          >
            {/* Filled part of the star */}
            <div
              style={{
                width: getStarFill(index),
                height: "100%",
                backgroundColor: "#FFD700",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
