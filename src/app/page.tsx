import React from 'react'
import Navbar from './landingPage/components/Navbar'
import Home from './landingPage/components/Home'
import Features from './landingPage/components/Features'
import About from './landingPage/components/About'
import Footer from './landingPage/components/Footer'

const page = () => {
  return (
    <div className=' bg-[#E6EBE0]'>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Footer/>
    </div>
  )
}

export default page