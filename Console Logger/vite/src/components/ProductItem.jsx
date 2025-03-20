export default function Product({ item }) {
  return (
      <div className="flex flex-col gap-2 cursor-pointer relative border-2 border-amber-600">
        <div className="flex justify-between gap-5 ">
          <img
          className="rounded-3xl object-cover h-[90%] border-2 border-white hover:border-black transition-colors duration-200"
          src={item.image}
          alt=""
        />
        
        </div>
        <p className="md:text-xl text-sm font-semibold truncate flex-1">
            {item.title}
          </p>
      </div>
  );
}
