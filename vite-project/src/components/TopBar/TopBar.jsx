// TopBar.jsx
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../../Context/ThemeProvider";

const TopBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-black text-white py-2 flex flex-row relative justify-between items-center">
      <p className="font-light absolute left-1/2 transform -translate-x-1/2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="font-bold cursor-pointer underline">Shop Now</span>
      </p>
      <div className="ml-auto mr-[9rem]">
        <div className="relative">
          <div className="inline-flex items-center overflow-hidden rounded-md bg-transparent gap-1.5">
            <button className="cursor-pointer" onClick={toggleTheme}>
              <FontAwesomeIcon icon={faMoon} className="w-5 h-5 text-white" />
            </button>
            <a href="#" className="py-2 text-sm text-white">
              English
            </a>
            <button className="h-full p-2 text-white cursor-pointer">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            className="hidden absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Arabic
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;