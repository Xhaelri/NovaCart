import { useForm } from "react-hook-form";
import registerImg from "../../assets/register.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../redux/slices/authSlice";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerLoading, registerError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchRegister(data))
      .unwrap()
      .then(() => {
        alert("Registration successful");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  const password = watch("password");
  return (
    <div className="grid grid-cols-[1fr_1fr] py-[60px]">
      <div>
        <img src={registerImg} alt="" className="max-w-[805px] max-h-[781px]" />
      </div>
      <div>
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white   md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-2xl  leading-7 tracking-widest text-black md:text-3xl font-medium ">
                  Create an account
                </h1>
                <p className="text-md font-[400] text-black ">
                  Enter your details below
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="text"
                      id="name"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  {/* Email Input Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      placeholder="Email or Phone Number"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  {/* Confirm Password Input Field */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    ></label>
                    <input
                      type="password"
                      id="confirm-password"
                      placeholder="Confirm Password"
                      className="bg-transparent outline-0 border-0 border-b-gray-500 border-b text-gray-900 block w-full py-2.5"
                      {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <p className="text-[#DB4444] text-sm mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  {/* Terms and Conditions Checkbox */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <div className="inline-flex items-center">
                        <label className="flex items-center cursor-pointer relative">
                          <input
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#DB4444] checked:border-[#DB4444]"
                            id="terms"
                            aria-describedby="terms"
                            {...register("terms", {
                              required:
                                "You must accept the terms and conditions",
                            })}
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
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        I accept the{" "}
                        <a
                          href="#"
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {errors.terms && (
                    <p className="text-[#DB4444] text-sm mt-1">
                      {errors.terms.message}
                    </p>
                  )}
                  {registerError && (
                    <p className="text-red-700">{registerError}</p>
                  )}
                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      disabled={registerLoading}
                      className="w-full cursor-pointer text-white bg-[#DB4444] hover:opacity-90 rounded  px-5 py-4 text-center"
                    >
                      {registerLoading ? "Registering..." : "Create an account"}
                    </button>
                    <button
                      type="submit"
                      disabled={registerLoading}
                      className="w-full cursor-pointer  text-black bg-transparent hover:opacity-90 rounded  px-5 py-3 text-center bordeer border-1 justify-center items-center gap-2 flex"
                    >
                      <FcGoogle className="text-[30px]" /> Sign up with Google
                    </button>
                  </div>
                  <p className="text-[14px] font-[400] text-gray-600 text-center ">
                    Already have an account?
                    <NavLink
                      to="/login"
                      className="font-[500] text-gray-700 relative inline-block mx-4 pb-[3px]  hover:text-[#DB4444]"
                    >
                      Log in
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-600"></span>
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
