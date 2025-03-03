import React from "react";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/register.png";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../redux/slices/authSlice";
const Login = () => {
  const { loginError, loginLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(fetchLogin(data))
      .unwrap()
      .then(() => {
        console.log("Login successful");
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="grid grid-cols-[1fr_1fr] py-[60px]">
      <div>
        <img src={registerImg} alt="" className="max-w-[805px] max-h-[781px]" />
      </div>
      <div>
        <section>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-2xl  leading-7 tracking-widest text-black md:text-3xl font-medium ">
                  Log in to Exclusive
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
                  {loginError && <p className="text-red-700">{loginError}</p>}
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={loginLoading}
                      className="w-1/2 cursor-pointer text-white bg-[#DB4444] hover:opacity-90 rounded  px-5 py-4 text-center"
                    >
                      {loginLoading ? "Logging in..." : "Login"}
                    </button>
                    <NavLink
                      to="/"
                      className="text-[#DB4444] text-nowrap text-sm"
                    >
                      Forgot Password?
                    </NavLink>
                  </div>

                  <div className="text-sm font-light text-gray-500">
                    <NavLink
                      to="/signup"
                      className="font-medium text-primary-600 hover:underline"
                    >
                      Don't have an account? Register here
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Login;
