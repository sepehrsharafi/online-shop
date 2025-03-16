import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  ReactNode,
  useRef,
  useMemo,
} from "react";
import { getUser } from "../api";

type UserType = {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
};

type UserContextType = {
  user: UserType | null;
  loading: boolean;
  error: string | null;
  refetchUser: () => Promise<void>;
};

// Create context with a meaningful default value for better debugging
const initialContext: UserContextType = {
  user: null,
  loading: true,
  error: null,
  refetchUser: async () => {},
};

const UserContext = createContext<UserContextType>(initialContext);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  // Store user data in sessionStorage to persist between route changes
  const fetchUser = useCallback(async () => {
    if (!isMounted.current) return;

    // Check if user data already exists in sessionStorage
    const storedUser = sessionStorage.getItem("userData");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setLoading(false);
        return; // Exit early if we have cached data
      } catch (e) {
        // Invalid stored data, continue with API fetch
        sessionStorage.removeItem("userData");
      }
    }

    setLoading(true);
    try {
      const fetchedUser = await getUser();
      if (!isMounted.current) return;

      // Store the fetched user in sessionStorage
      sessionStorage.setItem("userData", JSON.stringify(fetchedUser));
      setUser(fetchedUser);
    } catch (error: any) {
      if (!isMounted.current) return;
      setError(error.message);
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchUser();

    return () => {
      isMounted.current = false;
    };
  }, [fetchUser]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      loading,
      error,
      refetchUser: fetchUser,
    }),
    [user, loading, error, fetchUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
