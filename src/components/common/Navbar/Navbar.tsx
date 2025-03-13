import React from "react";
import { useEffect, useState, useCallback } from "react";
import Logo from "./Logo.webp";

import { getUser } from "../../../api";

type UserType = {
  id: number;
};

const Navbar = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    try {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
      setUserName(fetchedUser.name.firstname);
      console.log("Fetched User:", fetchedUser);
    } catch (error: any) {
      setError(error.message);
      console.error("Error fetching user:", error);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <nav className="flex flex-row justify-between items-center p-4 bg-gray-50 shadow-lg">
      <section className="flex flex-row items-center gap-2 h-11 w-11 lg:h-14 lg:w-14">
        <img
          className="rounded-full"
          src="https://i.pravatar.cc/100"
          alt="User Avatar"
        />
        <span className="whitespace-nowrap lg:text-lg">hi, {userName}</span>
      </section>
      <section>
        <img className="h-12 lg:h-16" src={Logo} alt="Logo" />
      </section>
      <section>cart</section>
      {error && <div className="text-red-500">{error}</div>}
    </nav>
  );
};

export default React.memo(Navbar);
