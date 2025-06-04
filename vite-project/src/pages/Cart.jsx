import { useSelector } from "react-redux";
import CartProduct from "../components/Cart/CartProduct";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return cart.products.length === 0 ? (
    <div className="text-black min-h-lvh text-5xl flex items-center justify-center">
      <h1>Cart is Empty!</h1>
    </div>
  ) : (
    <div className="mx-4 sm:mx-[10%] grid grid-rows-2 pt-4 min-h-screen">
      <div className="flex flex-col justify-start items-start ">
        <div className="mb-7  w-full  ">
          <table className="w-full">
            <thead className="shadow-sm shadow-gray-200 rounded-lg w-full h-14 font-medium">
              <tr>
                <th className="text-start ps-7 text-black font-medium">
                  Product
                </th>
                <th className="text-center text-black font-medium">Price</th>
                <th className="text-center text-black font-medium">Quantity</th>
                <th className="text-center text-black font-medium">Subtotal</th>
              </tr>
            </thead>
            {cart.products?.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </table>
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between items-start">
          <button className="py-3 px-6 text-center text-sm font-semibold text-black rounded-[4px] border border-black bg-white">
            Return To Shop
          </button>
          <button className="py-3 px-6 text-center text-sm font-semibold text-black rounded-[4px] border border-black bg-white">
            Update Cart
          </button>
        </div>

        <div className="flex  justify-between items-start mb-10">
          <div className="flex gap-3.5 ">
            <input
              className="py-3 px-8 border border-black rounded-[4px] text-gray-500"
              placeholder="Coupon Code"
              type="text"
            />
            <button className="py-3 px-6 text-center text-sm font-semibold text-white rounded-[4px] bg-[#DB4444]">
              Apply Coupon
            </button>
          </div>

          <div className="p-6 bg-white rounded-[4px] shadow-md max-h-fit w-1/3 border border-black ">
            <h2 className="text-xl font-medium   px-4 text-black">
              Cart Total
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-4 text-start text-sm font-semibold text-gray-700 ">
                      Subtotal
                    </td>
                    <td className="py-4 px-4 text-end text-sm font-semibold text-gray-700">
                      ${cart.totalPrice}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-4 px-4 text-start text-sm font-semibold text-gray-700">
                      Shipping
                    </td>
                    <td className="py-4 px-4 text-end text-sm font-semibold text-gray-700">
                      Free
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-start text-sm font-semibold text-gray-700">
                      Total
                    </td>
                    <td className="py-4 px-4 text-end text-sm font-semibold text-gray-700">
                      ${cart.totalPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col justify-center items-center">
                <Link
                  to={"/checkout"}
                  className="py-4 px-4 text-center text-sm font-semibold text-white rounded-[4px] bg-[#DB4444]"
                >
                  Process to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
