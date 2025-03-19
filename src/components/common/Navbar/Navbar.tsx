import React from "react";
import Logo from "../../../Images/Logo.webp";
import { useUser } from "../../../store/UserContext";
import { useCart } from "../../../store/CartContext";
import { Link } from "react-router-dom";
import UserModal from "../UserModal/UserModal";

// Create a separate component for user information to prevent re-renders
const UserInfo = React.memo(function UserInfo() {
  const { user, loading, error, openModal } = useUser();

  if (loading) return <span>Loading...</span>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (user) {
    return (
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={openModal}
      >
        <div className="bg-blue-100 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <span className="whitespace-nowrap lg:text-lg hover:text-blue-600 transition-colors">
          Hi, {user.name.firstname}
        </span>
      </div>
    );
  }
  return null;
});

const Navbar = () => {
  const { cartItems } = useCart();
  const { isModalOpen, closeModal } = useUser();

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  console.log("Navbar rendered");

  return (
    <>
      <nav className="flex flex-row justify-between items-center p-4 bg-gray-50 shadow-lg">
        <section className="flex flex-row items-center gap-2 lg:h-14">
          <UserInfo />
        </section>
        <section>
          <Link to="/">
            <img className="h-12 lg:h-16" src={Logo} alt="Logo" />
          </Link>
        </section>
        <section className="flex flex-row items-center gap-2">
          <Link to="/cart" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hidden lg:block"
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
            <span className="text-lg">Cart</span>
            <span className="bg-green-600 text-white px-[10px] py-[3px] lg:py-[2px] lg:text-lg rounded-full">
              {cartItemCount}
            </span>
          </Link>
        </section>
      </nav>

      {/* User Modal */}
      <UserModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

// Use React.memo to prevent re-renders if props haven't changed
export default React.memo(Navbar);
