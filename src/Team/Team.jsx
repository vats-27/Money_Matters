import React, { useState } from 'react'
import './Team.css'
import Member from './member.jsx'

function App(){
  return (
    <div className='Team'>
        <div style={{ backgroundColor: 'grey',height:'13vh',fontSize:'50px',textAlign:'center' }}>Navbar</div>
        <div className="top">
          <h2>The Team</h2>
        </div>

        <div className="members">
          <Member 
            source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
            name="Chetankumar S Majjagi" position="Web Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
            name="Chetankumar S Majjagi" position="Web Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
            name="Chetankumar S Majjagi" position="Web Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
            name="Chetankumar S Majjagi" position="Web Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
            name="Chetankumar S Majjagi" position="Web Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
            name="Chetankumar S Majjagi" position="Web Developer" 
            Insta="" LinkedIn=""
          />
        </div>
    </div>
  )
}

export default App
