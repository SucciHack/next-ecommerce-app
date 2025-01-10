"use client"
import Buttonscroll from '@/components/Buttonscroll'
import Hero from '@/components/Hero'
import Maincontent from '@/components/Maincontent'
import Navbar from '@/components/Navbar'
import Sidecontent from '@/components/Sidecontent'
export default function page() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Buttonscroll/>
      <div className='bg-[#FEFFFE] w-[98%] lg:w-[90%] mx-auto rounded-md mb-20 shadow-md overflow-hidden mt-6 min-h-[300px] flex'>
        <Sidecontent/>
        <Maincontent/>
      </div>
    </>
  )
}
