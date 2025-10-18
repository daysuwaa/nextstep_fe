"use client"
import { Folder, MessageSquare, Target } from 'lucide-react';
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare/>,
      title: 'Reflect Daily',
      description: 'Write your thoughts effortlessly.',
      gradient: 'from-blue-400 to-cyan-500',
      bgGlow: 'group-hover:shadow-blue-500/50'
    },
    {
      icon: <Folder/>,
      title: 'Stay Organized',
      description: 'Tag, sort, and revisit moments that matter.',
      gradient: 'from-purple-400 to-pink-500',
      bgGlow: 'group-hover:shadow-purple-500/50'
    },
    {
      icon: <Target/>,
      title: 'Track Growth',
      description: 'See how your mindset evolves over time.',
      gradient: 'from-emerald-400 to-teal-500',
      bgGlow: 'group-hover:shadow-emerald-500/50'
    }
  ];

  return (
    <section 
      id='features' 
      className='relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden'
    >
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-b from-sage-50 via-white to-sage-100/30'></div>
      <div className='relative z-10 max-w-7xl w-full'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div className='mb-6 inline-block animate-fade-in'>
            <span className='text-sage-700 font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-sage-100 to-sage-200 px-6 py-3 rounded-full border-2 border-sage-300 shadow-lg'>
              ✨ Features
            </span>
          </div>
          
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#527967] via-[#6d8f7b] to-[#527967] mb-6 animate-fade-in-up leading-tight'>
            Everything You Need
          </h2>
          
          <p className='text-xl md:text-2xl text-[#9ca895] max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay'>
            Simple tools to help you capture, organize, and grow through your daily reflections
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
              className='group relative animate-fade-in-up-delay'
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              
              {/* Card */}
              <div className='relative bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 border-2 border-sage-200/50 group-hover:border-sage-300 overflow-hidden'>
                
                {/* Decorative corner gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150`}></div>
                
                {/* Icon container */}
                <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <div className='text-white scale-75'>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#527967] transition-colors'>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed text-base md:text-lg mb-6'>
                  {feature.description}
                </p>

                {/* Animated underline */}
                <div className={`h-1.5 w-16 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-full transition-all duration-700 shadow-sm`}></div>

                {/* Floating number badge */}
                <div className='absolute top-6 right-6 w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        {/* <div className='text-center mt-20 animate-fade-in-up-delay-2'>
          <p className='text-gray-500 mb-4'>Ready to get started?</p>
          <div className='inline-flex items-center gap-2 text-[#527967] font-semibold group cursor-pointer'>
            <span className='group-hover:underline'>Start your journey today</span>
            <svg className='w-5 h-5 group-hover:translate-x-2 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.3s backwards;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.8s backwards;
        }
      `}</style>
    </section>
  );
};

export default Features;