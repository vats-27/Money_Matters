import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero'
import Blog from './About.jsx'
import Footer from './Footer.jsx'
import './Home.css'

function Home() {
  return (
    <div className='main'>
      <div className="full">
        <Navbar/>
        <Hero />
      </div>
      <Blog />
      <Footer/>
      
    </div>
  );
}

export default Home