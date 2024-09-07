import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Logo from './Logo/Logo'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="video">
        <video loop autoPlay muted>
          <source src="../../public/back.mp4" type="video/mp4" />
        </video>
      </div>
    
      <Navbar/>
      <Hero />
    </div>
  );
}

export default Home