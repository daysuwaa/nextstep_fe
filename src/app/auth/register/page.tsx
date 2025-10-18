/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import InputComponent from '../../components/Input'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import  axios from 'axios';
import {toast} from 'react-hot-toast';
import Image from 'next/image';
import Logo from "../../../../public/logo.png"

const Page = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://nextstep-be.onrender.com/api/v1/register', {
        username,
        email,
        password,
      });

      toast.success('Registration successful!');
      console.log('Response:', response.data);
      router.push('/auth/login');
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.response?.data?.message || 'Registration failed. Please try again.'
      );
    }
    finally {
      setIsLoading(false);
    }
  }
  const router = useRouter();

  return (
    <div className="grid lg:grid-cols-2 ">
     
      <div className="w-full min-h-screen p-8 space-y-12 bg-white rounded-lg shadow-md">
        <div className="flex items-center ml-auto justify-center lg:justify-end">
           <Image src={Logo} alt="logo" className="w-[100px] h-[100px] lg:hidden" />
       <p className="text-end hidden lg:block  text-sm">
            Already have an account?{" "}
          </p>
            <button onClick={()=>{
              router.push("/auth/login")
            }} className="ml-2 hidden lg:block hover:bg-[#E6EBE0] text-black border uppercase tracking-wider text-[10px] rounded-full text-sm px-4 py-1 border-[#52796F]">
              Log in
            </button>
            </div>
        <div className="lg:mt-[14rem] mt-[5rem] max-w-md mx-auto ">
          
          <h2 className="text-xl tracking-wider  text-start font-bold text-gray-900">
           Nice to meet you :)
          </h2>
          <p className="text-[#bec5b5] mb-[2rem] mt-3">Welcome! Kindly sign up and share your thoughts</p>
       

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <InputComponent
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="johndoe"
            type="email"
          />
          <InputComponent
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@email.com"
            type="email"
          />

          <InputComponent
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            type="password"
          />

          <button
            type="submit"
            disabled={isLoading} 
            className={`w-full text-sm py-2 mt-6 px-4 text-white font-medium rounded-md transition-colors ${
              isLoading
                ? "bg-[#6a978c] cursor-not-allowed"
                : "bg-[#52796F] hover:bg-[#6a978c] focus:ring-2 focus:ring-[#6a978c]"
            }`}
          >
            {isLoading ? (
              <div className="flex text-sm items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Loging in...</span>
              </div>
            ) : (
              "Log in"
            )}
          </button>
      
        </form>
        <div className='lg:hidden items-center justify-center flex mt-[2rem]'>
         <p className=" text-center  text-sm">
            Already have an account?{" "}
          </p>
            <button onClick={()=>{
              router.push("/auth/login")
            }} className=" hover:text-[#E6EBE0] text-[#52796F] uppercase tracking-wider  text-[12px] px-4 py-1 ">
              Log in
            </button>
             </div>
         </div>
      </div>
      
      <div className="bg-[#E6EBE0] min-h-screen hidden lg:flex items-center justify-center">
        <Image src={Logo} alt="logo" className="w-[400px] h-[400px]" />
  </div>
    </div>
  );
}

export default Page