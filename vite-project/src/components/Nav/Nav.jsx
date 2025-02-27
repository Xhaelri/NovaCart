import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";
import { ThemeContext } from "../../Context/ThemeProvider"; 
import { useContext } from "react";

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <TopBar />
      <div className="mx-4 sm:mx-[10%]">
        <NavBar />
      </div>
      <hr className="mt-5 border-t-1 border-gray-300 " />
    </div>
  );
};

export default Nav;