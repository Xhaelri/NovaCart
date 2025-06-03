import React from "react";
import { useForm } from "react-hook-form";
import email from "../assets/call.svg";
import phone from "../assets/email.svg";

const Contact = () => {
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
    <div className="mx-4 sm:mx-[10%] mt-10 mb-15 grid grid-cols-[1fr_2fr] gap-10 ">
      <div className="flex flex-col justify-between  p-10 bg-white rounded-lg shadow-lg ">
        <div className="flex flex-col">
          <div className="flex gap-5 mb-5 items-center">
            <div className="flex items-center justify-center bg-[#DB4444] rounded-full w-[50px] h-[50px]">
              <img src={phone} alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-semibold">Call Us</h3>
            </div>
          </div>
          <div className="text-black flex flex-col gap-5 mb-5">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>
        <hr className="border-gray-800" />
        <div className="flex flex-col mt-5">
          <div className="flex gap-5 mb-5 items-center">
            <div className="flex items-center justify-center bg-[#DB4444] rounded-full w-[50px] h-[50px]">
              <img src={email} alt="" />
            </div>
            <div>
              <h3 className="text-black text-lg font-semibold">Write To Us</h3>
            </div>
          </div>
          <div className="text-black flex flex-col gap-5 mb-5">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@Santoryu.com</p>
            <p>Emails: support@Santoryu.com</p>
          </div>
        </div>
      </div>
      <div className=" flex items-start justify-center p-6 bg-white rounded-lg shadow-lg h-full ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full justify-between gap-4"
        >
          {/* Name */}
          <div className="flex justify-center items-center gap-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-1"
              ></label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="bg-gray-100 text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* email */}

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-1"
              ></label>
              <input
                type="text"
                id="email"
                placeholder="Your email"
                className="bg-gray-100 text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* phone */}
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mb-1"
              ></label>
              <input
                type="number"
                id="phone"
                placeholder="Your Phone"
                className="bg-gray-100 text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all"
                {...register("phone", { required: "phone is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* message */}
          <div className="w-full h-full ">
            <label
              htmlFor="maessage"
              className="text-sm font-medium text-gray-700 mb-1"
            ></label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="bg-gray-100 w-full h-full text-start text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-[#DB4444] transition-all resize-none"
              {...register("message", {
                required: "Message is required",
              })}
            />

            {errors.maessage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.maessage.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="w-[180px] text-white text-sm bg-[#DB4444] hover:bg-[#b83232] transition-all duration-200 rounded-md px-4 py-4 text-center"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
