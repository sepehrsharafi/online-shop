import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
