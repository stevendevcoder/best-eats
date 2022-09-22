import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Foods from './components/Foods'
import Category from './components/Category'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {

  AOS.init({
    duration: 500
  });

  return (
    <div className="App">
      <div className="container max-w-[1540px] mx-auto h-full">
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Foods />
        <Category />
      </div>
    </div>
  )
}

export default App
