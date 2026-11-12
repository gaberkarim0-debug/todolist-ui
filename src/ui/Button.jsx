export default function Button({ children }) {
  return (
    <button type="submit" className="relative cursor-pointer px-5 py-3   text-center inline-flex justify-center  uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4  overflow-hidden">
      <span className="relative z-20 text-gray-400 tracking-wider">{children}</span>
      <span className="absolute left-[-75%] top-0 h-full bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#b5b0b0] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#b5b0b0] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#b5b0b0] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#b5b0b0] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
    </button>
  );
}
