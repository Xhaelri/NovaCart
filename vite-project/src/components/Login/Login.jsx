import React from "react";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/register.png";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchLogin } from "../../redux/slices/authSlice";
const Login = () => {
    const{loginError , loginLoading} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(fetchLogin(data)).unwrap()
    .then(() => {
      alert("Login successful");
    })
    .catch((error) => {
      console.error("Login failed:", error);
    });
  };

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
                  Login to Exclusive
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
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
                  {loginError && <p className="text-red-700">{loginError}</p>}
                  <button
                    type="submit"
                    disabled={loginLoading}
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    {loginLoading ? "Logging in..." : "Login"}
                  </button>

                  <div className="text-sm font-light text-gray-500">
                    <NavLink to="/signup" className="font-medium text-primary-600 hover:underline">
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