export default function ProductCard({ props }: any) {
  return (
    <article className="flex flex-col shadow-md hover:shadow-xl transition-shadow duration-150 rounded-xl w-96">
      <img
        className="w-full h-96 py-10 px-10 object-contain"
        src={props.image}
        alt=""
      />
      <section className="flex flex-col mx-6 my-4 gap-3">
        <h1 className="line-clamp-2 text-lg font-[500]">{props.title}</h1>
        <p className="line-clamp-3 min-h-[72px]">{props.description}</p>
        <div className="flex flex-row justify-between items-center">
          <span className="text-xl font-[600]">
            <span className="font-[600] text-lg">$</span>
            {props.price}
          </span>
          <button className="bg-blue-600 text-white rounded-lg px-3 py-[6px] shadow-[0_0_15px_1px_] shadow-indigo-500/40 hover:shadow-indigo-500/90 transition-shadow duration-150">
            Add to Cart
          </button>
        </div>
      </section>
    </article>
  );
}
