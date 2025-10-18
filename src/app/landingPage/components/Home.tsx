"use client"
import React from 'react'
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  
  return (
    <section 
      id='home' 
      className='relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-white via-sage-50/30 to-sage-100/20'
    >
      {/* Decorative background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 text-8xl opacity-5 animate-float'>🕯️</div>
        <div className='absolute top-40 right-20 text-7xl opacity-5 animate-float-delay-1'>🪶</div>
        <div className='absolute bottom-32 left-1/4 text-9xl opacity-5 animate-float-delay-2'>🌿</div>
        <div className='absolute top-1/3 right-1/4 text-6xl opacity-5 animate-float'>✨</div>
        
        {/* Gradient orbs */}
        <div className='absolute top-1/4 -left-20 w-72 h-72 bg-sage-200 rounded-full blur-3xl opacity-20'></div>
        <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-sage-300 rounded-full blur-3xl opacity-20'></div>
      </div>

      {/* Main content */}
      <div className='relative z text-center max-w-5xl mx-auto'>
        {/* Small badge */}
        <div className='inline-block mb-6 animate-fade-in'>
          <span className='bg-sage-100 text-sage-700 text-sm font-semibold px-4 py-2 rounded-full border border-sage-200'>
            ✨ Your Personal Reflection Space
          </span>
        </div>

        {/* Main heading */}
        <h1 className='text-5xl sm:text-6xl mb-[-3rem] lg:text-7xl text-[#527967] font-bold leading-tight animate-fade-in-up'>
          Capture moments.
          <br />
          <span className='bg-gradient-to-r from-sage-600 to-sage-800 bg-clip-text text-transparent'>
            Reflect. Grow.
          </span>
        </h1>

        {/* Description */}
        <p className='text-lg sm:text-xl lg:text-2xl text-[#9ca895] leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delay'>
          Momento helps you record your thoughts, track your journey, and rediscover your growth — one memory at a time.
        </p>

        {/* CTA Buttons */}
        <div className='mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2'>
          <button 
            onClick={() => {
              router.push("/auth/register")
            }} 
            className='group bg-[#52796F] py-4 lg:py-4 px-8 rounded-xl text-white font-semibold hover:bg-[#354f52] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2'
          >
            Start Your Journey
            <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
            </svg>
          </button>
          
          <button 
            onClick={() => {
              router.push('#features')
            }} 
            className='border-2 border-[#354f52] py-3 lg:py-4 px-18 rounded-xl font-semibold text-[#354f52] hover:bg-[#354f52] hover:text-white transition-all duration-200 transform hover:scale-105'
          >
            Learn More
          </button>
        </div>

        {/* Trust indicators */}
        <div className='mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-sage-600 animate-fade-in-up-delay-3'>
          <div className='flex items-center gap-2'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
            </svg>
            <span>100% Private</span>
          </div>
          <div className='flex items-center gap-2'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            <span>Loved by 10k+ Users</span>
          </div>
          <div className='flex items-center gap-2'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd' />
            </svg>
            <span>Simple & Easy</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home