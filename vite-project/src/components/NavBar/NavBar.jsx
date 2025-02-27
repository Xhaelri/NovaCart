import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FiUser } from "react-icons/fi";

import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext, useState, useEffect } from "react";
import {  useTheme } from "../../Context/ThemeProvider";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogout } from "../../redux/slices/authSlice";
const NavBar = () => {
  const { theme } = useTheme();
  const fav = useSelector((state) => state.fav);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const hideIcons =
    location.pathname === "/signup" || location.pathname === "/login";

  const dispatch = useDispatch();

  const handleLogOut = (data) => {
    dispatch(fetchLogout(data))
      .unwrap()
      .then(() => {
        alert("Logout successful");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div>
      <div className="flex flex-row justify-between mt-6 items-center">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <div className="list-none flex flex-row justify-between space-x-8">
          <ul className="md:flex items-start gap-5 font-medium">
            <NavLink to="/">
              <li className="py-1 font-light">Home</li>
              <hr
                className={`border-none outline-none h-[1.5px] rounded-[50px] w-3/5 m-auto hidden ${
                  theme === "dark" ? "bg-white" : "bg-gray-700"
                }`}
              />
            </NavLink>
            <NavLink to="/contact">
              <li className="py-1 font-light">Contact</li>
              <hr
                className={`border-none outline-none h-[1.5px] rounded-[50px] w-3/5 m-auto hidden ${
                  theme === "dark" ? "bg-white" : "bg-gray-700"
                }`}
              />{" "}
            </NavLink>
            <NavLink to="/about">
              <li className="py-1 font-light">About</li>
              <hr
                className={`border-none outline-none h-[1.5px] rounded-[50px] w-3/5 m-auto hidden ${
                  theme === "dark" ? "bg-white" : "bg-gray-700"
                }`}
              />{" "}
            </NavLink>
            <NavLink to="/signup">
              <li className="py-1 font-light">Sign Up</li>
              <hr
                className={`border-none outline-none h-[1.5px] rounded-[50px] w-3/5 m-auto hidden ${
                  theme === "dark" ? "bg-white" : "bg-gray-700"
                }`}
              />{" "}
            </NavLink>
            <NavLink to="/products">
              <li className="py-1 font-light">Products</li>
              <hr
                className={`border-none outline-none h-[1.5px] rounded-[50px] w-3/5 m-auto hidden ${
                  theme === "dark" ? "bg-white" : "bg-gray-700"
                }`}
              />{" "}
            </NavLink>
          </ul>
        </div>
        <div className="flex flex-row space-x-2.5 items-center">
          <div>
            <form className="max-w-md mx-auto">
              <label htmlFor="default-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full min-w-[250px] p-1 ps-3 text-sm text-gray-900 border-none rounded-[4px] bg-[#F5F5F5] focus:ring-0 focus:outline-none"
                  placeholder="What are you looking for?"
                  required
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-4">
                  <button className="cursor-pointer">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {!hideIcons && (
            <div className="flex flex-row items-center space-x-4">
              <div className="relative">
                <NavLink to="/wishlist">
                  <FontAwesomeIcon
                    icon={regularHeart}
                    className="cursor-pointer hover:text-red-500"
                  />
                </NavLink>
                {fav.totalQuantity > 0 ? (
                  <span className="h-3 w-3 bg-red-500 rounded-full absolute top-[-1px] right-[-5px] text-[9px] text-center text-white">
                    {fav.totalQuantity}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="relative">
                <NavLink to="/cart">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="cursor-pointer hover:text-gray-500"
                  />
                </NavLink>
                {cart.totalQuantity > 0 ? (
                  <span className="h-3 w-3 bg-red-500 rounded-full absolute top-[-1px] right-[-5px] text-[9px] text-center text-white">
                    {cart.totalQuantity}
                  </span>
                ) : (
                  ""
                )}
              </div>
              {user && (
                <div>
                  <FiUser
                    className="cursor-pointer hover:text-gray-500"
                    onMouseDown={() => setShowMenu(!showMenu)}
                  />
                  {showMenu && (
                    <div
                      onMouseLeave={() => setShowMenu(false)}
                      className="relative"
                    >
                      <div
                        className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md shadow-lg   bg-gradient-to-r from-white/10 to-black/90 backdrop-blur-3xl ring-1 ring-black/5"
                        role="menu"
                      >
                        <div className="p-2">
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                            onClick={() => navigate("/account")}
                          >
                            Manage My Account
                          </a>

                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            View Warehouse Info
                          </a>

                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Duplicate Product
                          </a>

                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Unpublish Product
                          </a>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                            onClick={handleLogOut}
                          >
                            Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
