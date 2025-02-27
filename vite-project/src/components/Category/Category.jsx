import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa6";

const categoryList = [
  { id: 1, name: "Phones", icon: <CiMobile1 /> },
  { id: 2, name: "Computers", icon: <HiOutlineComputerDesktop /> },
  { id: 3, name: "SmartWatch", icon: <IoWatchOutline /> },
  { id: 4, name: "Camera", icon: <CiCamera /> },
  { id: 5, name: "HeadPhones", icon: <CiHeadphones /> },
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
];

const Category = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col mt-5 mb-[60px]">
          <div className="flex space-x-2.5 items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></span>
            <span className="text-red-700 text-sm">Categories</span>
          </div>
          <div className="flex space-x-2.5 justify-between items-center">
            <h1 className="text-3xl font-semibold text-black mt-5">
              Browse By Category
            </h1>
            <div className="flex flex-row space-x-2.5 items-center text-3xl text-gray-500 ">
              <FaArrowCircleLeft className="hover:text-gray-700 transition-all duration-300" />
              <FaArrowCircleRight className="hover:text-gray-700 transition-all duration-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-8 pb-8 justify-between">
          {categoryList.map((category) => (
            <div
              key={category.id}
              className="flex flex-col space-y-5 justify-center items-center border border-gray-300 bg-transparent w-[170px] h-[145px] rounded-[4px] text-black hover:bg-[#DB4444] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl ">{category.icon}</div>
              <p className="text-base ">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
