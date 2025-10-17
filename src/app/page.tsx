"use client"
import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Heart, TrendingUp, Zap } from 'lucide-react';

export default function AbiDiaryLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    { icon: BookOpen, title: 'Daily Stories', desc: 'Share your moments' },
    { icon: Heart, title: 'Connect', desc: 'Build your community' },
    { icon: Sparkles, title: 'Express', desc: 'Your authentic self' },
  ];


  return (
    <div className="min-h-screen  text-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2 group">
          <BookOpen className="w-8 h-8 text-pink-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
           Nextstep
          </span>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="/auth/login" 
            className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Login
          </a>
          <a 
            href="/auth/register" 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-20">
        <div 
          className="text-center transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Your Story Matters
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Write Your Story,
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-blue-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Share Your World
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Join thousands of writers documenting their journeys, sharing experiences, and building meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/auth/register"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-2"
            >
              Start Writing Free
              <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features"
              className="px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-lg font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 mt-[7rem] max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Abi Diary</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <feature.icon className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-r from-pink-500/20 to-blue-500/20 backdrop-blur-lg border border-white/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of storytellers today
          </p>
          <a 
            href="/auth/register"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110"
          >
            Get Started Now
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}