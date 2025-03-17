import React from "react";
import img1 from "../../assets/Frame 684.png";
import img2 from "../../assets/Frame 685.png";
import img3 from "../../assets/Frame 686.png";
import img4 from "../../assets/Frame 687.png";
import icon1 from "../../assets/Customer-service.svg";
import icon2 from "../../assets/delivery.svg";
import icon3 from "../../assets/secure.svg";
import { FiArrowUp } from "react-icons/fi";
const NewArrival = () => {
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
          </div>
        </div>
        <div className="flex justify-between">
          <img src={img1} alt="" />
          <div className="flex flex-col justify-between">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="flex justify-between">
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly my-35">
          <div className="flex flex-col items-center space-y-5">
            <div className="bg-black h-15 w-15 rounded-full -outline-offset-2 outline-gray-300 outline-15 flex justify-center items-center">
              <img src={icon2} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold text-black mt-5">
                FREE AND FAST DELIVERY
              </h1>
              <p className="text-black font-light">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="bg-black h-15 w-15 rounded-full -outline-offset-2 outline-gray-300 outline-15 flex justify-center items-center">
              <img src={icon1} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold text-black mt-5">
                24/7 CUSTOMER SERVICE
              </h1>
              <p className="text-black font-light">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="bg-black h-15 w-15 rounded-full -outline-offset-2 outline-gray-300 outline-15 flex justify-center items-center">
              <img src={icon3} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold text-black mt-5">
                MONEY BACK GUARANTEE
              </h1>
              <p className="text-black font-light">
                We reurn money within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
