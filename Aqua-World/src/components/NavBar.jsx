export default function NavBar() {
  return (
    <div className="w-full flex justify-end gap-4 items-center h-16 bg-transparent font-sans pr-16 ">
      <a
        href="#home"
        className="text-white w-[100px] h-[40px] flex items-center justify-center font-bold rounded-2xl shadow-sm bg-[#28d8d5] hover:bg-[#07b3a4] hover:scale-[1.02] hover:duration-300  active:scale-95 active:duration-300"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-white w-[100px] h-[40px]  flex items-center justify-center font-bold rounded-2xl shadow-sm bg-[#28d8d5] hover:bg-[#07b3a4] hover:scale-[1.02] hover:duration-300  active:scale-95 active:duration-300"
      >
        About
      </a>
      <a
        href="#prds"
        className="text-white w-[100px] h-[40px] flex items-center justify-center font-bold rounded-2xl shadow-sm bg-[#28d8d5] hover:bg-[#07b3a4] hover:scale-[1.02] hover:duration-300  active:scale-95 active:duration-300"
      >
        Products
      </a>
    </div>
  );
}
