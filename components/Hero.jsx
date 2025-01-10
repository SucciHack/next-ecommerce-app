import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-[95%] md:w-[80%] lg:w-[90%] min-h-[300px] mx-auto mt-24">
      <div className="relative h-[30vh]">
        <Image className="shadow-md rounded-lg w-[95vw] lg:[80vh] h-[300px] object-cover mx-auto md:h-[300px]" src="/foodHero.jpg" alt="hero-img"  width={5813} height={4000}/>
        <div className="absolute top-5 right-[10%] flex justify-between items-center w-[80%]">
          <div className="bg-orange-500 rounded-full w-5 h-5"></div>
          <p className="text-lg md:text-xl lg:text-xl text-white font-bold">GET 20% CASHBACK ON FIRST ORDER</p>
        </div>
      </div>
    </div>
  )
}
