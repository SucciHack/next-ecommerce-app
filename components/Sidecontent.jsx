import { GiKiwiFruit } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { SiAdafruit } from "react-icons/si";
export default function Sidecontent() {
  return (
        <div className="w-[20%] overflow-hidden min-h-[300px] text-lg hidden md:block">
        <div className="drawer-content p-3">
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button text-3xl font-bold text-black md:text-lg">Open drawer</label>
        </div>
        <div className="drawer-side px-5 space-y-6 text-black md:text-sm lg:text-lg">
            <a href="#" className="hover:text-white gap-2 flex items-center hover:bg-emerald-500 py-3 px-6 rounded-md transition-colors"><GiFruitTree/>Everything</a>
            <a href="#" className="hover:text-white gap-2 flex items-center hover:bg-emerald-500 py-3 px-6 rounded-md transition-colors"><GiFruitTree/>Fruits</a>
            <a href="#" className="hover:text-white gap-2 flex items-center hover:bg-emerald-500 py-3 px-6 rounded-md transition-colors"><GiFruitBowl/>Vegetables</a>
            <a href="#" className="hover:text-white gap-2 flex items-center hover:bg-emerald-500 py-3 px-6 rounded-md transition-colors"><SiAdafruit/>Herbs</a>
        </div>
    </div>
  )
}
