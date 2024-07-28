/* eslint-disable react/prop-types */
import ButtonShop from "./ButtonShop";
export default function ProductCard({ img, name, price, description }) {
  return (
    <div className=" w-[300px] h-[400px] bg-transparent rounded-2xl border-[#03fcf8] border-2 flex flex-col  p-4 gap-4 items-center text-white font-sans">
      <img
        src={img}
        alt="fish"
        className=" top-[-80px] left-0 w-32 h-32 -mt-16"
      />
      <div className="flex flex-row w-full justify-between">
        <h4 className="font-bold">{name}</h4>
        <h4 className="text-green-500 font-bold">{price}</h4>
      </div>
      <p>{description}</p>
      <ButtonShop />
    </div>
  );
}
