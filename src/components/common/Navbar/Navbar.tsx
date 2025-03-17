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
      <section className="flex flex-row items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <span className="font-[500] text-lg">Cart</span>
        <span className="bg-green-600 text-white px-3 py-[4px] lg:py-[2px] font-[500] lg:text-lg rounded-full">
          0
        </span>
      </section>
    </nav>
  );
};

// Use React.memo to prevent re-renders if props haven't changed
export default React.memo(Navbar);
