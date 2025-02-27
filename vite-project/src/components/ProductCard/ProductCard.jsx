import React from "react";
import { PiEyeLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";
import { addToFav, removeFromFav } from "../../redux/slices/favSlice";

const ProductCard = ({ product, isCartItem = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.fav);

  const isProductInFav = fav.products.some((item) => item.id === product.id);

  const handleFavAction = () => {
    if (isProductInFav) {
      dispatch(removeFromFav(product)); 
    } else {
      dispatch(addToFav(product)); 
    }
  };

  
  const isProductInCart = cart.products.some((item) => item.id === product.id);

  
  const productInCart = cart.products.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  
  const handleCartAction = () => {
    if (isProductInCart) {
      dispatch(removeFromCart(product)); 
    } else {
      dispatch(addToCart(product)); 
    }
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product));
  };

  return (
    <div key={product.id} className="w-[270px] h-[350px] relative">
      <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative cursor-pointer group">
        <div className="flex flex-col justify-start items-end p-2 absolute top-0 right-0 space-y-2">
          {isProductInFav ? (
            <AiFillHeart
              onClick={handleFavAction}
              className="text-red-500 bg-white rounded-full p-1 text-3xl cursor-pointer transition-colors duration-300"
            />
          ) : (
            <AiOutlineHeart
              onClick={handleFavAction}
              className="text-black bg-white rounded-full p-1 text-3xl cursor-pointer hover:text-red-500 transition-colors duration-300"
            />
          )}

          <PiEyeLight onClick={() => {
            navigate(`/products/${product.id}`);
            scrollTo(0, 0);
          }} className="text-black bg-white rounded-full p-1 text-3xl cursor-pointer hover:text-blue-500 transition-colors duration-300" />
        </div>
        <img
          
          src={product.image}
          alt={product.title}
          className="w-[190px] h-[180px] object-contain mb-[16px] transition-transform duration-300 group-hover:scale-105 relative"
        />
        <button
          onClick={handleCartAction}
          className={`bg-black text-white cursor-pointer absolute bottom-0 w-full px-4 py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isProductInCart ? "bg-gray-500 opacity-100" : ""
          }`}
        >
          {isProductInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      {isProductInCart && (
        <div className="flex justify-center items-center space-x-3 mt-2 absolute bottom-7 right-0">
          <button
            onClick={handleDecreaseQuantity}
            className="px-[8px] py-[0.1px] bg-gray-500 text-white rounded-xl hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            -
          </button>
          <span className="text-black">{quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="px-[7px] py-[0.1px] bg-gray-500 text-white rounded-xl hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            +
          </button>
        </div>
      )}

      <h1 className="font-bold truncate mb-[8px] text-black mt-3">
        {product.title}
      </h1>
      <p className="font-semibold text-red-700">${product.price.toFixed(2)}</p>

      <div className="rating rating-xs">
        <input
          type="radio"
          name={`rating-${product.id}`}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${product.id}`}
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name={`rating-${product.id}`}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${product.id}`}
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name={`rating-${product.id}`}
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
};

export default ProductCard;
