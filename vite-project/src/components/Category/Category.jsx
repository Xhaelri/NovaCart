import { useRef } from "react";

import { CiCamera } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa6";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const categoryList = [
  { id: 1, name: "Phones", icon: <CiMobile1 /> },
  { id: 2, name: "Computers", icon: <HiOutlineComputerDesktop /> },
  { id: 3, name: "SmartWatch", icon: <IoWatchOutline /> },
  { id: 4, name: "Camera", icon: <CiCamera /> },
  { id: 5, name: "HeadPhones", icon: <CiHeadphones /> },
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
  { id: 7, name: "Camera", icon: <CiCamera /> },
  { id: 8, name: "HeadPhones", icon: <CiHeadphones /> },
  { id: 9, name: "Gaming", icon: <FaGamepad /> },
  { id: 10, name: "Gaming", icon: <FaGamepad /> },
  { id: 11, name: "Camera", icon: <CiCamera /> },
  { id: 12, name: "HeadPhones", icon: <CiHeadphones /> },
  { id: 13, name: "Gaming", icon: <FaGamepad /> },
];

const Category = () => {
  const carouselRef = useRef(null);

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
    <div>
      <div className="my-17">
        <div className="flex flex-col mb-[60px]">
          <div className="flex space-x-2.5 items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></span>
            <span className="text-red-700 text-sm">Categories</span>
          </div>
          <div className="flex space-x-2.5 justify-between items-center">
            <h1 className="text-3xl font-semibold text-black mt-5 font-inter">
              Browse By Category
            </h1>
            <div className="flex flex-row space-x-2.5 items-center text-3xl text-gray-500 ">
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
        <div ref={carouselRef} className="flex overflow-x-auto no-scrollbar space-x-12 scroll-smooth max-w-screen ">
  {categoryList.map((category) => (
    <div
    
      key={category.id}
      className="flex-none flex flex-col space-y-5 justify-center items-center border border-gray-300 bg-transparent w-[170px] h-[145px] rounded-[4px] text-black hover:bg-[#DB4444] hover:text-white transition-all duration-300 cursor-pointer"
    >
      <div className="text-5xl">{category.icon}</div>
      <p className="text-base whitespace-nowrap">{category.name}</p>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Category;
