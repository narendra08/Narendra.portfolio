import React from "react";
import "./menu.css"
export const Menu = () => {
    const handleMouseOver = (index) => {
        document.body.style.backgroundImage = `url('../../assets/ABOUT.png')`;
      };
    
      const handleMouseOut = () => {
        document.body.style.backgroundImage = `url('../../assets/HOME.png')`;
      };
      
  return (
    <div className="center-container">
      <ul className="centered-list">
        <li onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut}><a href="#">Home</a></li>
        <li onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}><a href="#">About</a></li>
        <li onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}><a href="#">Services</a></li>
        <li onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};
