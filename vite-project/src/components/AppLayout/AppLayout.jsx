import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto]">
      <Nav className={""}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
