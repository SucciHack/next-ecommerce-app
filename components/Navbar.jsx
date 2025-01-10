import { RiContactsFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className='flex justify-between items-center text-white bg-emerald-500 p-6 shadow-md fixed top-0 w-[100%] z-50'>
      <div className="logo text-xl lg:text-3xl">
        <h2>Grocerily</h2>
      </div>
      <div className="flex gap-3 md:gap-10 items-center links text-lg">
        <a className='flex items-center gap-1' href="#">signUp<RiContactsFill/></a>
        <div className="relative">
          <a className='text-2xl md:text-2xl' href="#"><AiOutlineShoppingCart/></a>
          <p className="bg-orange-300 text-white absolute top-[-35%] right-[-28%] text-sm rounded-full w-4 h-4 md:w-4 md:h-4 flex items-center justify-center">0</p>
        </div>
      </div>
    </div>
  )
}
