import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Addtocartbutton from "./Addtocartbutton";
export default function Maincontent() {
  return (
    <div className="w-[100%] min-h-[300px] p-4 grid grid-cols-1 md:w-[100%] gap-3 md:grid-cols-3 lg:grid-cols-4">
        <div className="card text-black text-2xl text-center w-[100%] bg-[#F1F2F7] items-center overflow-hidden rounded-lg shadow-md">
            <Image className="w-[100%] h-[150px] object-cover block transform scale-100 transition-transform duration-500 hover:scale-110" src="/foodHero.jpg" alt="" width={200} height={200} priority></Image>
            <div className="flex justify-between items-center p-3">
                <p className="font-bold">3$ <span className="text-sm font-thin">/loaf</span></p>
                <div className="flex gap-3 items-center">
                    <CiCircleMinus/>
                    <p>1</p>
                    <CiCirclePlus/>
                </div>
            </div>
            <Addtocartbutton/>
        </div>
        <div className="card text-black text-2xl text-center w-[100%] bg-[#F1F2F7] items-center overflow-hidden rounded-lg shadow-md">
            <Image className="w-[100%] h-[150px] object-cover block transform scale-100 transition-transform duration-500 hover:scale-110" src="/vegetables.jpg" alt="" width={200} height={200} priority></Image>
            <div className="flex justify-between items-center p-3">
                <p className="font-bold">3$ <span className="text-sm font-thin">/loaf</span></p>
                <div className="flex gap-3 items-center">
                    <CiCircleMinus/>
                    <p>1</p>
                    <CiCirclePlus/>
                </div>
            </div>
            <Addtocartbutton/>
        </div>
        <div className="card text-black text-2xl text-center w-[100%] bg-[#F1F2F7] items-center overflow-hidden rounded-lg shadow-md">
            <Image className="w-[100%] h-[150px] object-cover block transform scale-100 transition-transform duration-500 hover:scale-110" src="/foodHero.jpg" alt="" width={200} height={200} priority></Image>
            <div className="flex justify-between items-center p-3">
                <p className="font-bold">3$ <span className="text-sm font-thin">/loaf</span></p>
                <div className="flex gap-3 items-center">
                    <CiCircleMinus/>
                    <p>1</p>
                    <CiCirclePlus/>
                </div>
            </div>
            <Addtocartbutton/>
        </div>
        <div className="card text-black text-2xl text-center w-[100%] bg-[#F1F2F7] items-center overflow-hidden rounded-lg shadow-md">
            <Image className="w-[100%] h-[150px] object-cover block transform scale-100 transition-transform duration-500 hover:scale-110" src="/foodHero.jpg" alt="" width={200} height={200} priority></Image>
            <div className="flex justify-between items-center p-3">
                <p className="font-bold">3$ <span className="text-sm font-thin">/loaf</span></p>
                <div className="flex gap-3 items-center">
                    <CiCircleMinus/>
                    <p>1</p>
                    <CiCirclePlus/>
                </div>
            </div>
            <Addtocartbutton/>
        </div>
        <div className="card text-black text-2xl text-center w-[100%] bg-[#F1F2F7] items-center overflow-hidden rounded-lg shadow-md">
            <Image className="w-[100%] h-[150px] object-cover block transform scale-100 transition-transform duration-500 hover:scale-110" src="/foodHero.jpg" alt="" width={200} height={200} priority></Image>
            <div className="flex justify-between items-center p-3">
                <p className="font-bold">3$ <span className="text-sm font-thin">/loaf</span></p>
                <div className="flex gap-3 items-center">
                    <CiCircleMinus/>
                    <p>1</p>
                    <CiCirclePlus/>
                </div>
            </div>
            <Addtocartbutton/>
        </div>
    </div>
  )
}
