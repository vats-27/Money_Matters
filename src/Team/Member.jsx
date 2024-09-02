import React, { useState } from 'react'
import './Member.css'
import Insta from './Photos/insta.jsx'
import LinkedIn from './Photos/LinkedIn.jsx'

function App({source, name, position, insta, In}){
  return (
    <div className='member'>
        <div className="img">
            <img src={source} alt="Photo" />
        </div>

        <div className="details">
            <h2 className='name'>{name}</h2>
            <h3>{position}</h3>

            <div className="logos">
                <Insta />
                <LinkedIn />
            </div>
        </div>
    </div>
  )
}

export default App