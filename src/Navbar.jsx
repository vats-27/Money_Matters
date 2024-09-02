import React from 'react'
import Button from './Button'
import './Navstyle.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"> Logo</div>
      <div className="menu">
        <Button text="Home" />
        <Button text="Events" />
        <Button text="Gallery" />
        <Button text="Team" />
        <Button text="About" />
      </div>
    </div>
  );
}

export default Navbar