import { PiEyeLight } from "react-icons/pi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";
import { addToFav, removeFromFav } from "../../redux/slices/favSlice";
import { useState } from "react";
import AverageRating from "../StarRating/AverageRating";

const ProductCard = ({ product, isCartItem = false, isWishList = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.fav);

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || "#DB4444"
  );

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

  const handleRemoveFromFav = () => {
    dispatch(removeFromFav(product));
  }

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product));
  };

  return (
    <div key={product.id} className="w-[270px] h-[350px] relative">
      {product.discount && (
        <div className="absolute top-5 left-5 z-10">
          <span className="bg-[#DB4444] text-white text-sm font-light px-[12px] py-[4px] rounded-sm">
            -{product.discount}%
          </span>
        </div>
      )}
      <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative cursor-pointer group">
{!isWishList?(
          <div className="flex flex-col justify-start items-end p-2 absolute top-0 right-0 space-y-2">
          
          {isProductInFav ? (
            <AiFillHeart
              onClick={handleFavAction}
              className="text-[#DB4444] bg-white rounded-full p-1 text-3xl cursor-pointer transition-colors duration-300"
            />
          ) : (
            <AiOutlineHeart
              onClick={handleFavAction}
              className="text-black bg-white rounded-full p-1 text-3xl cursor-pointer hover:text-[#DB4444] transition-colors duration-300"
            />
          )}

          <PiEyeLight
            onClick={() => {
              navigate(`/products/${product.id}`);
              scrollTo(0, 0);
            }}
            className="text-black bg-white rounded-full p-1 text-3xl cursor-pointer hover:text-blue-500 transition-colors duration-300"
          />
        </div>
):(
  <div className="flex flex-col justify-start items-end p-2 absolute top-0 right-0 space-y-2">
            <BsTrash 
              onClick={handleRemoveFromFav}
              className="text-black bg-white rounded-full p-1 text-3xl cursor-pointer hover:text-[#DB4444] transition-colors duration-300"
            />
  </div>

)}
        <img
          src={product.image}
          alt={product.title}
          className="w-[190px] h-[180px] object-contain mb-[16px] transition-transform duration-300 group-hover:scale-105 relative"
        />
        <button
          onClick={handleCartAction}
          className={`bg-black text-white cursor-pointer absolute bottom-0 w-full px-4 py-2 text-center ${isWishList?"opacity-100":"opacity-0 "}group-hover:opacity-100 transition-opacity duration-500 ${
            isProductInCart ? "bg-black opacity-100" : ""
          }`}
        >
          {isProductInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      {isProductInCart && (
        <div className="flex justify-center items-center space-x-3 mt-2 absolute bottom-7 right-0">
          <button
            onClick={handleDecreaseQuantity}
            className="px-[8px] py-[0.1px] bg-black text-white rounded-xl hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            -
          </button>
          <span className="text-black">{quantity}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="px-[7px] py-[0.1px] bg-black text-white rounded-xl hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            +
          </button>
        </div>
      )}

      <h1 className="font-medium truncate mb-[8px] text-black mt-3">
        {product.title}
      </h1>

      <div className="flex gap-4 items-center">
        <div className="flex space-x-4 space-y-1 flex-col">
          <div className="flex space-x-2">
            <p className="font-medium text-red-700">${product.price}</p>
            {product.discount && (
              <p className="font-medium text-gray-400 line-through">
                ${(product.price / (1 - product.discount / 100)).toFixed()}
              </p>
            )}
          </div>
          <AverageRating productId={product.id} />
        </div>
      </div>

      {product.colors && (
        <div className="flex space-x-3 mb-5 pt-3 ps-0.5">
          {product.colors.map((color, index) => (
            <label
              key={index}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`color-${product.id}`}
                value={color}
                checked={selectedColor === color}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === color ? "border-2" : "border-transparent"
                }`}
                style={{
                  backgroundColor: color,
                  outline:
                    selectedColor === color ? `1px solid ${color}` : "none",
                }}
              ></span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;