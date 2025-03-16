import React from "react";
import Logo from "../../../Images/Logo.webp";
import { useUser } from "../../../store/UserContext";

// Create a separate component for user information to prevent re-renders
const UserInfo = React.memo(() => {
  const { user, loading, error } = useUser();

  if (loading) return <span>Loading...</span>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (user)
    return (
      <span className="whitespace-nowrap lg:text-lg">
        Hi, {user.name.firstname}
      </span>
    );
  return null;
});

const Navbar = () => {
  console.log("Navbar rendering"); // For debugging purposes

  return (
    <nav className="flex flex-row justify-between items-center p-4 bg-gray-50 shadow-lg">
      <section className="flex flex-row items-center gap-2 lg:h-14 lg:w-14">
        <UserInfo />
      </section>
      <section>
        <img className="h-12 lg:h-16" src={Logo} alt="Logo" />
      </section>
      <section>cart</section>
    </nav>
  );
};

// Use React.memo to prevent re-renders if props haven't changed
export default React.memo(Navbar);
