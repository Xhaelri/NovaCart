import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import useGetAllProducts from "../Hooks/useGetAllProducts";

const WishList = () => {
  const fav = useSelector((state) => state.fav);
  const { products } = useGetAllProducts();
  const dispatch = useDispatch();
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

  const handleAddAllToCart = () => {
    fav.products.forEach((product) => {
      dispatch(addToCart(product));
    });
  };

  return (
    <div className="relative mb-17 flex flex-col mx-4 sm:mx-[10%]">
      <div className="flex justify-between items-center pt-9">
        <h1 className="text-xl font-regular text-black mt-5">
          Whishlist ({fav.totalQuantity})
        </h1>
        <div className="flex justify-center mt-10">
          <button
            className="bg-transparent text-black px-[48px] py-[16px] rounded-sm border cursor-pointer"
            onClick={handleAddAllToCart}
          >
            Move All To Bag
          </button>
        </div>
      </div>
      {/* Section Header */}
      <div className="flex flex-col mt-5 mb-[60px]">
        <div className="flex justify-between items-center relative">
          <div></div>
          {/* Arrow Buttons in Top-Right Corner */}
          <div className="flex space-x-3 pt-9">
            <button
              onClick={scrollLeft}
              className="bg-[#F5F5F5] p-2 rounded-full  hover:bg-gray-300"
            >
              <FiArrowLeft size={22} color="black" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-[#F5F5F5] p-2 rounded-full  hover:bg-gray-300"
            >
              <FiArrowRight size={22} color="black" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div
        ref={carouselRef}
        className="flex  overflow-x-auto overflow-y-hidden no-scrollbar gap-13 scroll-smooth max-w-screen"
      >
        {fav.products?.map((product) => (
          <div key={product.id}>
            <ProductCard key={product.id} product={product} isWishList={true} />
          </div>
        ))}
      </div>

      <div className="my-17">
        <div className="flex flex-col mt-5 mb-[60px]">
          <div className="flex space-x-2.5 items-center justify-between">
            <div className="flex space-x-2.5 items-center justify-center">
              <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></span>
              <span className="text-xl font-semibold text-black font-inter text-center">
                Just For You
              </span>
            </div>
            <div className="flex space-x-2.5 justify-between items-center"></div>
            <Link
              to="/products"
              className="bg-transparent text-black px-[48px] py-[16px] rounded-sm border cursor-pointer"
              onClick={() => scrollTo(0, 0)}
            >
              See All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-13">
          {products
            ?.filter((product) => product.price > 500)
            .sort((a, b) => b.price - a.price)
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
