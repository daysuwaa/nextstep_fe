"use client"
import InputComponent from '@/app/component/InputComponent'
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import  axios from 'axios';
import {toast} from 'react-hot-toast';


const Page = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5068/api/v1/register', {
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
  }
  const router = useRouter();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Welcome to The NextStep
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className='space-y-4'>
          <InputComponent 
          label='Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='johndoe'
            type='text'
          />
          <InputComponent 
          label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='johndoe@email.com'
            type='email'
          />
          
          <InputComponent 
          label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='*********'
            type='password' 
          />
          
          <button 
            type='submit'
            className='w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
          >
            Submit
          </button>
          <p> have an acount?<Link href='/auth/login' className='text-blue-700'>Log in</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Page