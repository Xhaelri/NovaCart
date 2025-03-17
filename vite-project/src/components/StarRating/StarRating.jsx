import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import {  useQuery } from "@tanstack/react-query";
import { getUserRating} from "../../Services/Rating";
import { getUser } from "../../Services/UserAuthFirebase";
import useUpdateUserRating from "../../Hooks/useUpdateUserRating";

const StarRating = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const user = getUser();

  const interactive = true
  // Query for getting the user's current rating if logged in
  const { data: userRating } = useQuery({
    queryKey: ["userRating", productId, user?.uid],
    queryFn: () => getUserRating(user?.uid, productId),
    enabled: !!user && !!productId && interactive,
    onSuccess: (data) => {
      if (data) {
        setRating(data.rating);
      }
    },
    onError: (error) => {
      console.error("Error fetching user rating:", error);
    }
  });

  // Mutation for submitting/updating a rating
  const { rateMutation } = useUpdateUserRating(productId);
  // Set rating from user data when available

  
  useEffect(() => {
    if (userRating) {
      setRating(userRating.rating);
    } else if (interactive) {
      setRating(0);
    }
  }, [userRating, interactive]);

  // Handle rating click
  const handleRating = (value) => {
    if (!interactive || !user) return;
    
    setRating(value);
    rateMutation.mutate(value);
  };

  // Render stars (either interactive or display-only)
  const renderStars = () => {
    return Array(5)
      .fill()
      .map((_, index) => {
        const ratingValue = index + 1;
        
        if (interactive) {
          return (
            <span
              key={index}
              className="cursor-pointer text-sm"
              onClick={() => handleRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              {ratingValue <= (hover || rating) ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaRegStar className="text-yellow-400" />
              )}
            </span>
          );
        } else {
          // Display-only stars
          return (
            <span key={index} className="text-sm">
              {ratingValue <= rating ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaRegStar className="text-yellow-400" />
              )}
            </span>
          );
        }
      });
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      {!interactive && (
        <span className="text-gray-500 ml-1">
          ({rating > 0 ? rating : "0"})
        </span>
      )}
      {rateMutation.isError && (
        <span className="text-red-500 ml-2 text-xs">
          Failed to submit rating
        </span>
      )}
    </div>
  );
};

export default StarRating;