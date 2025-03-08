import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const productInCart = cart.products.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;



  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product));
  };

  return (
    <tbody>
      <tr className="h-7"></tr>
      <tr className="shadow-sm shadow-gray-200 rounded-lg h-24">
        <td className="text-start ps-7">
          <div className="flex items-center text-black gap-5">
            <img className="w-[54px]" src={product.image} />
            {product.title}
          </div>
        </td>
        <td className="text-center text-black">${product.price}</td>
        <td className="text-center text-black">
          <button className="px-2 m-2 cursor-pointer border border-gray-300 rounded-[10px]" onClick={handleDecreaseQuantity}>-</button>
          {quantity}
          <button className="px-2 m-2 cursor-pointer border border-gray-300 rounded-[10px]" onClick={handleIncreaseQuantity}>+</button>
        </td>
        <td className="text-center text-black">${product.price * quantity}</td>
      </tr>
      <tr className="h-2"></tr>
    </tbody>
  );
};

export default CartProduct;
