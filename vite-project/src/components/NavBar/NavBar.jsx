import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../Context/ThemeProvider";
import { useSelector } from "react-redux";
import AccountMenu from "../AccountMenu/AccountMenu";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import SearchList from "./SearchList";

const NavBar = () => {
  const searchRef = useRef();
  const searchContainerRef = useRef();
  const { theme } = useTheme();
  const fav = useSelector((state) => state.fav);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const [showMenu, setShowMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();
  const hideIcons =
    location.pathname === "/signup" || location.pathname === "/login";

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false); // New state for showing/hiding search results

  const { products } = useGetAllProducts();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setShowSearchResults(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setShowSearchResults(false);
      return;
    }

    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    const results = products?.filter((product) => {
      const titleMatches = product.title
        ?.toLowerCase()
        .includes(lowerCaseSearchQuery);
      const descriptionMatches = product.description
        ?.toLowerCase()
        .includes(lowerCaseSearchQuery);
      return titleMatches || descriptionMatches;
    });

    setFilteredProducts(results || []);
    if (
      searchQuery.trim() !== "" &&
      (results?.length > 0 || results?.length === 0)
    ) {
      setShowSearchResults(true);
    }
  }, [searchQuery, products]);

  return (
    <div>
      <div className="flex flex-row justify-between mt-6 items-center">
        <h1 className="font-bold text-2xl">NovaCart</h1>
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
            <NavLink to="/products">
              <li className="py-1 font-light">Products</li>
              <hr
                className={`border-none outline-none h-[1.5px] rounded-[50px] w-3/5 m-auto hidden ${
                  theme === "dark" ? "bg-white" : "bg-gray-700"
                }`}
              />{" "}
            </NavLink>
            {!user && (
              <NavLink to="/signup">
                <li className="py-1 font-light">Sign Up</li>
                <hr
                  className={`border-none outline-none h-[1.5px] rounded-[50px] w-3/5 m-auto hidden ${
                    theme === "dark" ? "bg-white" : "bg-gray-700"
                  }`}
                />
              </NavLink>
            )}
          </ul>
        </div>
        <div className="flex flex-row space-x-2.5 items-center">
          <div>
            <form className="max-w-md mx-auto" ref={searchContainerRef}>
              {" "}
              {/* Attach ref to the form */}
              <label htmlFor="default-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full min-w-[250px] p-2 ps-3 text-xs text-gray-900 border-none rounded-[4px] bg-[#F5F5F5] focus:ring-0 focus:outline-none"
                  placeholder="What are you looking for?"
                  required
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  ref={searchRef}
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-4">
                  <button onClick={(e)=>{e.preventDefault()}} type="submit" className="cursor-pointer">
                    <svg
                      className="w-4 h-4 text-black"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 1 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative">
                {showSearchResults && searchQuery.trim() !== "" && (
                  <SearchList searchResults={filteredProducts} />
                )}

                {/* {showSearchResults && searchQuery.trim() !== "" && filteredProducts.length === 0 && (
                <p className="text-md text-gray-500 pl-5 absolute">No results found.</p>
              )} */}
              </div>
            </form>
          </div>
          {!hideIcons && (
            <div className="flex flex-row items-center space-x-1.5">
              <div className="relative">
                <NavLink to="/wishlist">
                  <AiOutlineHeart className="cursor-pointer hover:text-[#DB4444] w-[22px] h-6" />
                </NavLink>
                {fav.totalQuantity > 0 ? (
                  <span className="h-4 w-4 bg-[#DB4444] rounded-full absolute top-[-5px] right-[-5px] text-[9px] flex justify-center items-center text-white">
                    {fav.totalQuantity}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="relative">
                <NavLink to="/cart">
                  <IoCartOutline className="cursor-pointer hover:text-gray-500 -me-1  w-6 h-6" />
                </NavLink>
                {cart.totalQuantity > 0 ? (
                  <span className="h-4 w-4 bg-[#DB4444] rounded-full absolute top-[-5px] right-[-5px] text-[9px] flex justify-center items-center text-white">
                    {cart.totalQuantity}
                  </span>
                ) : (
                  ""
                )}
              </div>
              {user && (
                <div className="relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    onMouseEnter={() => setIsActive(true)}
                    className={`relative flex justify-center items-center p-1 rounded-full transition-all duration-200 ${
                      showMenu ? "bg-[#DB4444] text-white" : "hover:bg-gray-300"
                    }`}
                  >
                    <AiOutlineUser className="cursor-pointer w-5 h-5" />
                  </button>

                  {showMenu && (
                    <div
                      onMouseLeave={() => {
                        setShowMenu(false);
                        setIsActive(false);
                      }}
                      className="absolute right-0 mt-2 w-56 divide-y divide-gray-100 rounded-md shadow-lg bg-black/65 backdrop-blur-3xl ring-1 ring-black/5 z-10"
                    >
                      <AccountMenu />
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
