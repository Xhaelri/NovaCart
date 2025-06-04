import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CheckOutItem from "../components/CheckOut/CheckOutItem";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form
        className="mx-4 sm:mx-[10%] mt-10 mb-15 grid grid-cols-[1fr_1fr] gap-10 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-7">
          <div className="flex flex-col h-full justify-between gap-4  items-start p-6 bg-white  ">
            <h1 className="text-3xl font-semibold text-black mb-5">
              Billing Details
            </h1>
            {/* Name */}
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-100 w-full text-black border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* company */}
            <div className="w-full">
              <label
                htmlFor="company"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-100 w-full text-black border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>
            {/* street */}
            <div className="w-full">
              <label
                htmlFor="street"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Street Address
              </label>
              <input
                type="text"
                id="street"
                className="bg-gray-100 w-full text-black border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("street", { required: "street is required" })}
              />
              {errors.street && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.street.message}
                </p>
              )}
            </div>
            {/* Apartment */}
            <div className="w-full">
              <label
                htmlFor="Apartment"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="Apartment"
                className="bg-gray-100 w-full text-black border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("Apartment")}
              />
              {errors.Apartment && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Apartment.message}
                </p>
              )}
            </div>
            {/* Town */}
            <div className="w-full">
              <label
                htmlFor="Town"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Town/City
              </label>
              <input
                type="text"
                id="Town"
                className="bg-gray-100 w-full text-black border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("Town", { required: "Town/City is required" })}
              />
              {errors.Town && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Town.message}
                </p>
              )}
            </div>
            {/* phone */}
            <div className="w-full">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-100 w-full text-black border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("phone", { required: "phone is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* email */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-400 mb-1"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-100 w-full text-black border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex items-start justify-items-start">
              <div className="flex items-center h-5">
                <div className="inline-flex ">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#DB4444] checked:border-[#DB4444]"
                      id="terms"
                      aria-describedby="terms"
                      {...register("terms")}
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-900">
                  Save this information for faster check-out next time
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline"
                  ></a>
                </label>
              </div>
            </div>
            {errors.terms && (
              <p className="text-[#DB4444] text-sm mt-1">
                {errors.terms.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col  p-10 bg-white ">
          <div className="flex flex-col items-start">
            <div className="  w-full  ">
              <table className="w-full">
                {/* {cart.products?.map((product) => (
                  <CheckOutItem key={product.id} product={product} />
                ))} */}
              </table>
            </div>
          </div>
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

          <div className="flex flex-col items-start gap-3.5 w-full my-5">
            <div className=" flex justify-center items-center  gap-2">
              <input
                type="radio"
                id="order"
                name="order"
                value="order"
                className="peer h-5 w-5 cursor-pointer rounded-full border-2 border-black appearance-none checked:bg-black checked:border-white checked:outline-1 checked:outline-black"
              />
              <label htmlFor="order" className="text-black">
                Bank
              </label>
            </div>

            <div className=" flex justify-center items-center  gap-2">
              <input
                type="radio"
                id="order"
                name="order"
                value="order"
                className="peer h-5 w-5 cursor-pointer rounded-full border-2 border-black appearance-none checked:bg-black checked:border-white checked:outline-1 checked:outline-black"
              />
              <label htmlFor="order" className="text-black">
                Cash On Delivery
              </label>
            </div>
          </div>

          <div className="flex gap-3.5 w-full">
            <input
              className="py-3 px-8 border border-black rounded-[4px] text-gray-500 w-full"
              placeholder="Coupon Code"
              type="text"
            />
            <button className="py-3 px-6 text-center text-sm font-semibold text-white rounded-[4px] bg-[#DB4444] text-nowrap">
              Apply Coupon
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
