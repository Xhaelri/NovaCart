import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";
import { useTheme } from "../../Context/ThemeProvider";
const Nav = ({ className }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } ${className ? className : ""}`}
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
