import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="flex flex-row justify-between mb-25">
      <div className="border-e-2 border-gray-200 pt-13 -ms-2 ">
        <ul className="menu bg-transparent rounded-box w-56 text-black p-0 ">
          <li>
            <details >
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
            <details >
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
      <div className="pt-10">
        <img src={hero} alt="" className="w-[892px] h-[344px]"/>
      </div>
    </div>
  );
};

export default Hero;
