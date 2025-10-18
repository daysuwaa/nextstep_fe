"use client"
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import Logo from "../../../../public/logo.png"
import Image from 'next/image'
import { useRouter } from "next/navigation";
const Navbar = () => {
    const router = useRouter()
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
     const handleToggleNavbar = () => setIsNavbarOpen((prev) => !prev);
  return (
    <div>
        <nav className="hidden lg:flex justify-between items-center py-4 px-[5rem] bg-white/80 backdrop-blur-md  fixed top-0 w-full z-50">
            {/* <h1 className="text-2xl font-semibold text-gray-800">Memento</h1> */}
           <Image src={Logo} alt='logo' className='h-14 w-14'/>
            <ul className="flex space-x-8 text-sm text-gray-600">
                <li>
                    <a href="#home" className="hover:text-gray-900">Home</a>
                </li>
                <li>
                    <a href="#features" className="hover:text-gray-900">Features</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-gray-900">About</a>
                </li>
            </ul>
            <div className='space-x-6'>
                <button onClick={()=>{
                    router.push('/auth/register')
                }} className="px-4 py-2 text-sm rounded-md bg-[#52796F] text-white hover:bg-[#354F52]">
                    Get Started
                </button>
                <button onClick={()=>{
                    router.push("/auth/login")
                }} className="px-8 py-2 text-sm rounded-md border border-[#52796F] text-gray-700 hover:bg-[#527967]">
                    Login
                </button>
            </div>
        </nav>
        {/* navbar for sm screens */}
        <nav className='flex lg:hidden items-center justify-between py-2 px-4 z-100'>
            <Image src={Logo} alt='logo' className='h-14 w-14'/>

           {/* Menu / Close icon */}
      {isNavbarOpen ? (
        <X onClick={handleToggleNavbar} className="cursor-pointer z-110" />
      ) : (
        <Menu onClick={handleToggleNavbar} className="cursor-pointer z-110" />
      )}

      {/* Mobile menu */}
      {isNavbarOpen && (
        <div className="absolute top-14 right-0 w-full bg-[#E6EBE0] rounded-xl shadow-lg p-4 transition-all mt-3 z-[9999]">
          <ul className="space-y-3 text-center text-gray-700 font-medium">
            <li className="hover:text-[#52796F] text-gray-700 cursor-pointer" > <a href="#home" className="hover:text-gray-900">Home</a></li>
            <li className="hover:text-[#52796F] text-gray-700 cursor-pointer"> <a href="#features" className="hover:text-gray-900">Features</a></li>
            <li className="hover:text-[#52796F] text-gray-700 cursor-pointer"> <a href="#about" className="hover:text-gray-900">About</a></li>
          </ul>
          <div className='mx-auto space-y-4 '>
                <button onClick={()=>{
                    router.push('/auth/register')
                }} className="px-4 py-2 mt-4 text-sm rounded-md w-full bg-[#52796F] text-white hover:bg-[#354F52]">
                    Get Started
                </button>
                <button className="px-8 py-2 text-sm w-full rounded-md border border-[#52796F] text-black hover:bg-[#354F52]">
                    Login
                </button>
            </div>
        </div>
      )}
        </nav>
    </div>
  )
}

export default Navbar