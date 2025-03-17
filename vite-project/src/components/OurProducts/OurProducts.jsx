import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import hero from "../../assets/Frame 600.png";

const OurProducts = () => {
  const { products = [] } = useGetAllProducts();
  const filteredProducts = products
    ?.filter((product) => product.price > 300)
    .sort((a, b) => b.price - a.price);

  const itemsPerPage = 8; // 4 columns × 2 rows
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get the products for the current page
  const displayedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Go to previous page
  const scrollLeft = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  // Go to next page
  const scrollRight = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  return (
    <div className="relative mb-17 flex flex-col items-center ">
      <div className="my-17 ">
        <img src={hero} alt="" className="w-screen object-cover" />
      </div>
      <div>
        <div className="flex flex-col mt-5 mb-[60px]">
          <div className="flex space-x-2.5 items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></span>
            <span className="text-red-700 text-sm">Our Products</span>
          </div>

          <div className="flex justify-between items-center relative">
            <h1 className="text-3xl font-semibold text-black mt-5">
              Explore Our Products
            </h1>

            {/* Arrow Buttons in Top-Right Corner */}
            <div className="absolute right-0 top-[-40px] flex space-x-3">
              <button
                onClick={scrollLeft}
                className="bg-[#F5F5F5] p-2 rounded-full hover:bg-gray-300"
              >
                <FiArrowLeft size={22} color="black" />
              </button>
              <button
                onClick={scrollRight}
                className="bg-[#F5F5F5] p-2 rounded-full hover:bg-gray-300"
              >
                <FiArrowRight size={22} color="black" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid (4 columns, 2 rows) */}
        <div className="grid grid-cols-4 gap-13">
          {displayedProducts.map((product) => (
            <ProductCard key={`${product.id}-page-${currentPage}`} initialRating={3} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/products"
            className="bg-[#DB4444] text-white px-[48px] py-[16px] rounded-sm"
            onClick={() => scrollTo(0, 0)}
          >
            View All Products
          </Link>
        </div>
      </div>
      {/* Section Header */}
    </div>
  );
};

export default OurProducts;
