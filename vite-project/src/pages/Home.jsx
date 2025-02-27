import React from "react";
import Products from "../components/Products/Products";
import Category from "../components/Category/Category";
import HrRuler from "../components/HrRuler/HrRuler";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <div className="mx-4 sm:mx-[10%]">
        <Hero />
        <Products />
        <HrRuler />
        <Category />
        <HrRuler />
      </div>
    </div>
  );
};

export default Home;
