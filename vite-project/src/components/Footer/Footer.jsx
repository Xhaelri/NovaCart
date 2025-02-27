import React from "react";
import qrCode from "../../assets/QrCode.png";
import googlePlay from "../../assets/GooglePlay.png";
import appStore from "../../assets/download-appstore.png";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">

    <div className="bg-black text-white grid grid-cols-5 gap-4 pt-[80px] px-[137px]">
      <div className="mb-4">
        <h1 className="mb-4 font-semibold text-xl">Exclusive</h1>
        <h3 className="mb-4 font-light">Subscribe</h3>
        <p className="mb-4 font-light">Get 10% off your first order</p>
        <input
          className="p-2 border border-white bg-transparent max-w-[217px]"
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <h1 className="mb-4 font-semibold text-xl">Support</h1>
        <h3 className="mb-4 font-light">
          111 Bijoy sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </h3>
        <p className="mb-4 font-light">exclusive@gmail.com</p>
        <p className="mb-4 font-light">+88015-88888-9999</p>
      </div>
      <div className="mb-4">
        <h1 className="mb-4 font-semibold text-xl">ِAccount</h1>
        <h3 className="mb-4 font-light">My Account</h3>
        <p className="mb-4 font-light">Login / Register</p>
        <p className="mb-4 font-light">Cart</p>
        <p className="mb-4 font-light">Wishlist</p>
        <p className="mb-4 font-light">Shop</p>
      </div>
      <div className="mb-4">
        <h1 className="mb-4 font-semibold text-xl">Quick Link</h1>
        <h3 className="mb-4 font-light">Privacy Policy</h3>
        <p className="mb-4 font-light">Terms Of Use</p>
        <p className="mb-4 font-light">FAQ</p>
        <p className="mb-4 font-light">Contact</p>
      </div>
      <div className="mb-4">
        <h1 className="mb-4 font-semibold text-xl">Download App</h1>
        <p className="mb-4 text-xs text-gray-500">save $3 with App New User Only</p>
        <div className="flex gap-1 mb-8">
          <div>
            <img src={qrCode} alt="" />
          </div>
          <div className="flex flex-col justify-between">
            <img src={googlePlay} alt="" />
            <img src={appStore} alt="" />
          </div>
        </div>
        <div className="flex gap-6 mb-4">
          <RiFacebookLine className="w-[24px] h-[24px]" />
          <FaXTwitter className="w-[24px] h-[24px]" />
          <CiInstagram className="w-[24px] h-[24px]" />
          <RiLinkedinLine className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
    <div className="text-gray-700 flex justify-center items-center bg-black py-5"> <FaRegCopyright />
     Copyright Rimel 2025. All right reserved</div>
    </div>
  );
};

export default Footer;
