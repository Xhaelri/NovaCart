import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="mx-4 sm:mx-[10%] flex justify-between pt-4 min-h-screen">
      <div className="flex flex-col justify-start items-start ">
        {cart.products?.map((product) => (
                      //we can add a boolean prop to the ProductCard component to indicate that it's in the cart isCartItem={false}
          <div key={product.id} className="mb-7  w-full shadow-md p-6 rounded-lg "> 
              <ProductCard key={product.id} product={product} isCartItem={true} />
          </div>
        ))}
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md max-h-fit  ">
        <h2 className="text-2xl font-bold mb-6 text-black">Checkout</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Product
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Quantity
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products?.map((product) => (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="py-4 px-4 text-sm text-gray-700">{product.title}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{product.quantity}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">${product.price.toFixed(2)}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">
                    ${(product.quantity * product.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="3"
                  className="py-4 px-4 text-right text-sm font-semibold text-gray-700"
                >
                  Total
                </td>
                <td className="py-4 px-4 text-sm font-semibold text-gray-700">
                  ${cart.totalPrice.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;