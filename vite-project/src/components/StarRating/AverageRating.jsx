
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import useGetAverageRating from "../../Hooks/useGetAverageRating";

const AverageRating = ({productId , inDetails}) => {

  // Query for getting the product's average rating
  const { data, isLoading, isError } = useGetAverageRating(productId);

  if (isLoading) {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FaRegStar key={i} className="text-gray-300 text-sm" />
        ))}
        <span className="text-gray-400 ml-1">(0)</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FaRegStar key={i} className="text-gray-300 text-sm" />
        ))}
        <span className="text-red-500 ml-1">(Error loading ratings)</span>
      </div>
    );
  }

  const { average, count } = data || { average: 0, count: 0 };

  // Render stars based on the average rating
  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const value = index + 1;

      if (value <= Math.floor(average)) {
        // Full star
        return <FaStar key={index} className="text-yellow-400 text-sm" />;
      } else if (value - 0.5 <= average) {
        // Half star
        return (
          <FaStarHalfAlt key={index} className="text-yellow-400 text-sm" />
        );
      } else {
        // Empty star
        return <FaRegStar key={index} className="text-yellow-400 text-sm" />;
      }
    });
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      {!inDetails && <span className="text-gray-500 ml-1">({count})</span>}
    </div>
  );
};

export default AverageRating;
