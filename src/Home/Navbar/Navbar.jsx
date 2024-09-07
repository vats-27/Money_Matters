import React from 'react'
import Button from './Button'
import './Navstyle.css'
import Logo from '../Logo/Logo.jsx';

function Navbar() {
  
  return (
    <div className="navbar">
      <div className="header">
        <Logo />
      </div>
      <div className="menu">
        <Button text="Home" url="/" />
        <Button text="Events" url="/Events" />
        <Button text="Gallery" url="/Gallery" />
        <Button text="Team" url="/Team" />
        <Button text="About" url="/About" />
      </div>
    </div>
  );
}

export default Navbar