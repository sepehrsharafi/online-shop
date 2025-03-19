import { useCart } from "../../../store/CartContext";

export default function ProductCard({ props }: any) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: props.id,
      title: props.title,
      description: props.description,
      price: props.price,
      quantity: 1, // Default quantity when adding to cart
    });
  };

  return (
    <article className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-150 rounded-xl w-96">
      <div className="min-h-96">
        <img
          className="w-full h-full py-10 px-10 object-contain"
          src={props.image}
          alt="product-image"
        />
      </div>
      <section className="flex flex-col justify-between h-full mx-6 my-4 gap-3">
        <div>
          <h1 className="line-clamp-1 text-lg font-[500]">{props.title}</h1>
          <p className="line-clamp-5 ">{props.description}</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-xl font-[600]">
            <span>$</span>
            {props.price}
          </span>
          <button
            className="bg-blue-600 text-white rounded-lg px-3 py-[6px] shadow-[0_0_15px_1px_] shadow-indigo-500/40 hover:shadow-indigo-500/90 transition-shadow duration-150"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </article>
  );
}
