import { useState, useEffect } from "react";
import { getUser } from "../../Services/UserAuthFirebase";
import StarRating from "./StarRating";
import AverageRating from "./AverageRating";

const ProductRating = ({ productId ,inDetails}) => {
  const [showRatingForm, setShowRatingForm] = useState(false);
  const user = getUser();

  // Track user authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  // Update authentication state when user changes
  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  return (
    <div className="my-4 ">
      <div className="flex flex-col gap-4">
        <div>
          <AverageRating productId={productId} size="text-lg" inDetails={inDetails} />
        </div>
        <div>
          {isAuthenticated ? (
            <button
              onClick={() => setShowRatingForm(!showRatingForm)}
              className="text-sm underline text-gray-600 hover:text-black"
            >
              {showRatingForm ? "Cancel" : "Rate this product"}
            </button>
          ) : (
            <span className="text-sm text-gray-500">
              Sign in to rate this product
            </span>
          )}
        </div>
      </div>

      {showRatingForm && isAuthenticated && (
        <div className="mt-3 p-4 bg-gray-50 rounded-md ">
          <h3 className="text-sm font-medium mb-2">Your rating:</h3>
          <StarRating productId={productId} inDetails={inDetails} />
          <p className="text-xs text-gray-500 mt-2">
            Click on a star to rate this product
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductRating;
