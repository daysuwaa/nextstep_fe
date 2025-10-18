/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import InputComponent from "../../components/Input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import Logo from "../../../../public/logo.png"

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // start loading

    try {
      const response = await axios.post(
        "https://nextstep-be.onrender.com/api/v1/login", 
        // "http://localhost:5068/api/v1/login",
        {
        email,
        password,
      });

      const { token, userId } = response.data.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="grid lg:grid-cols-2 ">
      <div className="hidden bg-[#E6EBE0] min-h-screen lg:flex items-center justify-center">
        <Image src={Logo} alt="logo" className="w-[400px] h-[400px]" />
  </div>
     
      <div className="w-full min-h-screen p-8 space-y-12 bg-white rounded-lg shadow-md">
        <div className="flex items-center ml-auto justify-center lg:justify-end">
            <Image src={Logo} alt="logo" className="w-[100px] h-[100px] lg:hidden" />
        <p className="text-end  hidden lg:block text-sm">
            Don’t have an account?{" "}
          </p>
            <button onClick={()=>{
              router.push("/auth/register")
            }} className="ml-2 hidden lg:block hover:bg-[#E6EBE0] text-black border uppercase tracking-wider text-[10px] rounded-full text-sm px-4 py-1 border-[#52796F]">
              Sign up
            </button>
            </div>
        <div className="lg:mt-[14rem] mt-[5rem] max-w-md mx-auto ">
          <h2 className="text-xl tracking-wider  text-start font-bold text-gray-900">
            Hello! Welcome back to Momento!
          </h2>
          <p className="text-[#bec5b5] mb-[2rem] mt-3">Log in to your account</p>
       

        <form onSubmit={handleSubmit} className="space-y-4 ">
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
         <p className=" text-center text-sm">
            Don&apos;t have an account?{" "}
          </p>
            <button onClick={()=>{
              router.push("/auth/register")
            }} className=" hover:text-[#E6EBE0] text-[#52796F] uppercase tracking-wider  text-[12px] px-2 py-1 ">
              Sign up
            </button>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Page;