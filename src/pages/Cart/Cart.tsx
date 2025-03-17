import CartItem from "../../components/common/CartItem/CartItem";

function CartPage() {
  return (
    <div className="overflow-auto w-full ">
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
          <CartItem
            id={132}
            title="title"
            description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
            quantity={12}
            price={230}
            totalPrice={321321}
          />
        </tbody>
        <tfoot className="border border-gray-300">
          <tr>
            <td colSpan={5} className="px-20 py-2">
              <span className="font-bold">Total</span>
            </td>
            <td className="py-2 text-right">$0</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default CartPage;
