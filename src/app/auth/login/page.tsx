/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import InputComponent from "../../components/Input";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ loading state
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Sign in to NextStep
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            className={`w-full py-2 px-4 text-white font-medium rounded-md transition-colors ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>loging in...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>

          <p className="text-center">
            Don’t have an account?{" "}
            <Link href="/auth/register" className="text-blue-700">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;