import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero'
import Blog from './Blog.jsx'
import './Home.css'

function Home() {
  return (
    <div className='main'>
      <div className="full">
        <div className="video">
          <video loop autoPlay muted>
            <source src="../../public/back.mp4" type="video/mp4" />
          </video>
        </div>
    
        <Navbar/>
        <Hero />
      </div>
      <Blog />
      
    </div>
  );
}

export default Home