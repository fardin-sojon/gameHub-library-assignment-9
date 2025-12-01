import React from "react";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
