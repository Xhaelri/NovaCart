import { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import CountdownTimer from "../CountDown/CountDown";
import { Link } from "react-router-dom";

const FlashSales = () => {
  const { products } = useGetAllProducts();
  const carouselRef = useRef(null);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 4);

  // Scroll left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mb-17 flex flex-col ">

      {/* Section Header */}
      <div className="flex flex-col mt-5 mb-[60px]">
        <div className="flex space-x-2.5 items-center">
          <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></span>
          <span className="text-red-700 text-sm">Today's</span>
        </div>

        <div className="flex justify-between items-center relative">
            <div className="flex space-x-20">
          <h1 className="text-4xl font-semibold text-black mt-5 font-inter">
            Flash Sales
          </h1>
          <CountdownTimer targetDate={targetDate}/>
            </div>

          {/* View All Button */}


          {/* Arrow Buttons in Top-Right Corner */}
          <div className=" right-0 top-[-40px] flex space-x-3">
            <button
              onClick={scrollLeft}
              className="bg-[#F5F5F5] p-2 rounded-full  hover:bg-gray-300"
            >
              <FiArrowLeft  size={22} color="black" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-[#F5F5F5] p-2 rounded-full  hover:bg-gray-300"
            >
              <FiArrowRight  size={22} color="black" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div ref={carouselRef} className="flex py-9 overflow-x-auto overflow-y-hidden no-scrollbar gap-13 scroll-smooth max-w-screen">
        {products?.map((product) => (
          <div key={product.id}>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}

      </div>
      
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
  );
};

export default FlashSales;
