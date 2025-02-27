import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";

const WishList = () => {
  const fav = useSelector((state) => state.fav);

  return (
    <div className="mx-4 sm:mx-[10%] flex justify-between pt-4 min-h-screen">
      <div className="grid grid-cols-1 gap-33 sm:grid-cols-2 lg:grid-cols-3">
        {fav.products?.map((product) => (
          <div key={product.id} className="mb-7 h-fit shadow-md p-6 rounded-lg "> 
              <ProductCard key={product.id} product={product} isCartItem={true} />
          </div>
        ))}
      </div>
      </div>
  );
};

export default WishList;
