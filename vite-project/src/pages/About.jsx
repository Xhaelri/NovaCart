import { useState } from "react";
import about from "../assets/about.png";
import icon1 from "../assets/Customer-service.svg";
import icon2 from "../assets/delivery.svg";
import icon3 from "../assets/secure.svg";

import icon4 from "../assets/shop.svg";
import icon5 from "../assets/Sale-Hollow-White.svg";
import icon6 from "../assets/Shopping bag.svg";
import icon7 from "../assets/Moneybag.svg";

import icon4b from "../assets/shop_black_hollow.svg";
import icon5b from "../assets/Sale.svg";
import icon6b from "../assets/Shopping-Bag-Black.svg";
import icon7b from "../assets/Moneybag-Black.svg";

import social1 from "../assets/instagram.svg";
import social2 from "../assets/Linkedin.svg";
import social3 from "../assets/Vector1.svg";

import img1 from "../assets/image 46.png";
import img2 from "../assets/image 47.png";
import img3 from "../assets/image 51.png";

import { CiTwitter } from "react-icons/ci";

const About = () => {
  //State to track hover for each icon
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle hover state
  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  // Function to handle leaving hover state
  const handleLeave = () => {
    setHoveredIndex(null);
  };

  // Array of icon data for the first set of cards
  const iconData = [
    {
      default: icon4,
      hover: icon4b,
      value: "10.5k",
      label: "Sallers active our site",
    },
    {
      default: icon5,
      hover: icon5b,
      value: "33k",
      label: "Monthly Product Sale",
    },
    {
      default: icon6,
      hover: icon6b,
      value: "45.5k",
      label: "Customer active in our site",
    },
    {
      default: icon7,
      hover: icon7b,
      value: "25k",
      label: "Annual gross sale in our site",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between mt-25 mb-15">
        <div className="w-1/2 ms-4 sm:mx-[10%]">
          <h1 className="text-4xl font-semibold text-black mb-5 tracking-wider">
            Our Story
          </h1>
          <p className="text-black mb-3">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <br />
          <p className="text-black">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-3/4">
          <img className="w-full" src={about} alt="" />
        </div>
      </div>
      <div className="mx-4 sm:mx-[10%]">
        <div className="flex justify-evenly my-35">
          {iconData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-5 border border-gray-300 rounded-sm w-70 h-60 justify-center hover:bg-[#DB4444] group cursor-pointer"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <div className="bg-black group-hover:bg-white h-15 w-15 rounded-full -outline-offset-2 group-hover:-outline-offset-1 outline-gray-300 group-hover:outline-gray-300/50 outline-15 flex justify-center items-center">
                <img
                  src={hoveredIndex === index ? data.hover : data.default}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold text-black mt-5 group-hover:text-white">
                  {data.value}
                </h1>
                <p className="text-black font-light group-hover:text-white">
                  {data.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between my-35">
          <div className="flex flex-col gap-5">
            <div className="bg-[#F5F5F5] w-[370px] h-[420px] flex justify-center items-end rounded-sm">
              <img src={img1} alt="" />
            </div>
            <div className="flex flex-col text-black gap-2">
              <h1 className="text-3xl font-regular">Tom Cruise</h1>
              <p className="font-light text-sm">Founder & Chgairman</p>
              <div className="flex space-x-3">
                <CiTwitter className="text-black" size={25} />
                <img src={social1} alt="" />
                <img src={social2} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-[#F5F5F5] w-[370px] h-[420px] flex justify-center items-end rounded-sm">
              <img src={img3} alt="" />
            </div>
            <div className="flex flex-col text-black gap-2">
              <h1 className="text-3xl font-regular">Emma Watson</h1>
              <p className="font-light text-sm">Managing Director</p>
              <div className="flex space-x-3">
                <CiTwitter className="text-black" size={25} />
                <img src={social1} alt="" />
                <img src={social2} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-[#F5F5F5] w-[370px] h-[420px] flex justify-center items-end rounded-sm">
              <img src={img2} alt="" />
            </div>
            <div className="flex flex-col text-black gap-2">
              <h1 className="text-3xl font-regular">Will Smith</h1>
              <p className="font-light text-sm">Product Designer</p>
              <div className="flex space-x-3">
                <CiTwitter className="text-black" size={25} />
                <img src={social1} alt="" />
                <img src={social2} alt="" />
              </div>
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
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
