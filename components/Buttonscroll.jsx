import { FaLongArrowAltDown } from "react-icons/fa";
export default function Buttonscroll() {
  return (
    <div className='flex items-center justify-center mt-2'>
      <button className='border border-white px-6 py-3 text-white rounded-md flex gap-2 items-center'>Start Odering Now <span className="flex gap-1"><FaLongArrowAltDown/><FaLongArrowAltDown/></span></button>
    </div>
  )
}
