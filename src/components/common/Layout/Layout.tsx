// components/common/Layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar /> {/* Navbar is now rendered only once */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
