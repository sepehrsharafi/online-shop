import React from "react";
import { useCart } from "../../../store/CartContext";

interface CartItemProps {
  id: number;
  title: string;
  description: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export default function CartItem(props: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <tr className="border border-gray-300 h-16">
      <td className="text-center">{props.id}</td>
      <td className="text-center">{props.title}</td>
      <td className="text-center line-clamp-4">{props.description}</td>
      <td className="text-center">
        <div className="flex flex-row justify-center items-center gap-2 h-full">
          <button
            className="bg-red-600 text-white p-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
            onClick={() => decreaseQuantity(props.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 12H6"
              />
            </svg>
          </button>
          <span>{props.quantity}</span>
          <button
            className="bg-blue-600 text-white p-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
            onClick={() => increaseQuantity(props.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="text-center">${props.price.toFixed(2)}</td>
      <td className="text-center">${props.totalPrice.toFixed(2)}</td>
      <td className="text-center">
        <button
          className="bg-red-600 text-white p-[6px] rounded-full shadow-md hover:shadow-lg transition-shadow"
          onClick={() => removeFromCart(props.id)}
        >
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}
