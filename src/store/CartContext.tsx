import React, { createContext, useContext, useState, ReactNode } from "react";

// Defined the type for cart items
export type CartItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
};

// Defined the context type
type CartContextType = {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  getTotalPrice: () => number;
};

// Context was created
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component was created
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = (item: CartItemType) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // If it exists, increase the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return updatedItems;
      } else {
        // If it doesn't exist, add it to the cart
        return [...prevItems, item];
      }
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
