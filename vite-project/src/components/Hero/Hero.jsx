import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import { Carousel } from "react-responsive-carousel";
import hero6 from "../../assets/hero6.png";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between mb-25">
      {/* Sidebar Menu */}
      <div className="border-e-2 border-gray-200 pt-13 -ms-2">
        <ul className="menu bg-transparent rounded-box w-56 text-black p-0">
          <li>
            <details>
              <summary>Woman's Fashion</summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Men's Fashion</summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Electronics</a>
          </li>
          <li>
            <a>Home & Lifestyle</a>
          </li>
          <li>
            <a>Medicine</a>
          </li>
          <li>
            <a>Sports & Outdoor</a>
          </li>
          <li>
            <a>Baby's & Toys</a>
          </li>
          <li>
            <a>Groceries & Pets</a>
          </li>
          <li>
            <a>Health & Beauty</a>
          </li>
        </ul>
      </div>

      {/* Hero Carousel */}
      <div className="pt-10 max-w-[965px] max-h-[350px]">
        <Carousel
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <button
                className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                  isSelected ? "bg-[#DB4444] border-2" : "bg-white border-2"
                }`}
                onClick={onClickHandler}
                key={index}
                role="button"
                aria-label={`Slide ${label}`}
              />
            );
          }}
        >
  <div className="w-[965px] h-[350px]">
    <img src={hero6} alt="Slide 1" className="w-full h-full object-center" />
  </div>
  <div className="w-[965px] h-[350px]">
    <img src={hero1} alt="Slide 2" className="w-full h-full object-center" />
  </div>
  <div className="w-[965px] h-[350px]">
    <img src={hero2} alt="Slide 3" className="w-full h-full object-center" />
  </div>
  <div className="w-[965px] h-[350px]">
    <img src={hero3} alt="Slide 4" className="w-full h-full object-center" />
  </div>
  <div className="w-[965px] h-[350px]">
    <img src={hero4} alt="Slide 5" className="w-full h-full object-center" />
  </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
