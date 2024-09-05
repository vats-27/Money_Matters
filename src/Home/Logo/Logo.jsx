import React from 'react'
import './Logo.css'

function Logo() {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div onClick={handleClick} className="Logo">
      <img src="src\Home\Photos\Money_Matters.png" alt="Logo" />
      <div className="clubname">Money Matters</div>
    </div>
  );
}

export default Logo