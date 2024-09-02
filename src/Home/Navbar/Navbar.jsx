import React from 'react'
import Button from './Button'
import './Navstyle.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom';



function Navbar() {
  
  return (
    <div className="navbar">
      {/* <div className="logo">  */}
        {/* <img src="src\Home\Photos\Money_Matters.png" alt="" /> */}
      {/* </div> */}
      <div className="menu">
        <Button text="Home" url="/" />
        <Button text="Events" url="/Events" />
        <Button text="Gallery" url="/Gallery"/>
        <Button text="Team" url="/Team"/>
        <Button text="About" url="/About"/>
      </div>
    </div>
  );
}

export default Navbar