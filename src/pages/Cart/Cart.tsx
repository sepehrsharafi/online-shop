import CartItem from "../../components/common/CartItem/CartItem";
import { useCart } from "../../store/CartContext";

function CartPage() {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="overflow-auto w-full">
      <table className="w-full border border-gray-300 min-w-[550px] max-w-7xl mx-3 lg:mx-auto mt-12 lg:text-lg">
        <thead className="border border-gray-300">
          <tr className="h-16 bg-slate-100">
            <th className="text-center min-w-20">Index</th>
            <th className="text-center min-w-32 w-52">Title</th>
            <th className="text-center min-w-48 w-64">Description</th>
            <th className="text-center min-w-24">Quantity</th>
            <th className="text-center min-w-28">Price</th>
            <th className="text-center min-w-28">Total Price</th>
            <th className="text-center min-w-24">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              quantity={item.quantity}
              price={item.price}
              totalPrice={item.price * item.quantity}
            />
          ))}
        </tbody>
        <tfoot className="border border-gray-300">
          <tr>
            <td colSpan={5} className="px-20 py-2">
              <span className="font-bold">Total</span>
            </td>
            <td className="py-2 text-right">${getTotalPrice().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CartPage;
