import React from "react";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/register.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../redux/slices/authSlice";
import { NavLink } from "react-router-dom";
/* import {login,signup} from "../../firebase/firebaseConfig"
 */
const Register = () => {
  const {registerLoading, registerError} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchRegister(data)).unwrap()
    .then(() => {
      alert("Registration successful");
    })
    .catch((error) => {
      console.error("Registration failed:", error);
    });
  };

  const password = watch("password");
  return (
    <div className="grid grid-cols-2 py-[60px]">
      <div>
        <img src={registerImg} alt="" className="max-w-[805px] max-h-[781px]" />
      </div>
      <div>
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create an account
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  {/* Name Input Field */}
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Input Field */}
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@company.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Password Input Field */}
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Confirm Password Input Field */}
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                    )}
                  </div>

                  {/* Terms and Conditions Checkbox */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        {...register("terms", {
                          required: "You must accept the terms and conditions",
                        })}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500">
                        I accept the{" "}
                        <a href="#" className="font-medium text-primary-600 hover:underline">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={registerLoading}
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {registerLoading ? "Registering..." : "Create an account"}
                  </button>

                  {/* Login Link */}
                  <p className="text-sm font-light text-gray-500">
                    Already have an account?{" "}
                    <NavLink to="/login" className="font-medium text-primary-600 hover:underline">
                      Login here
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;