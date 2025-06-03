import {  useSelector } from "react-redux";

const CheckOutItem = ({ product }) => {

  const cart = useSelector((state) => state.cart);

  const productInCart = cart.products.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;





  return (
    <tbody>
      <tr className="h-7"></tr>
      <tr className="  h-18">
        <td className="text-start ps-7">
          <div className="flex items-center text-black gap-5">
            <img className="w-[54px]" src={product.image} />
            {product.title}
          </div>
        </td>
        <td className="text-center text-black">x{product.quantity}</td>
        <td className="text-center text-black">${product.price}</td>
      </tr>
      <tr className="h-2"></tr>
    </tbody>
  );
};

export default CheckOutItem;
