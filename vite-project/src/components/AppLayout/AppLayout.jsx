
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto]">
      <Nav/>
      <Outlet />
      <ScrollToTopButton/>
      <Footer />
    </div>
  );
};

export default AppLayout;
