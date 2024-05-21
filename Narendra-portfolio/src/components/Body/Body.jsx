import React, { useState } from 'react';
import "./Body.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import Animation1 from "./Animation1";
export const Body = () => {
    const texts = ["Web Developer.","Freelancer.", "Traveller.", "Blogger.","Reader.","Coder.","Fitness freak."];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 100); // Delay before showing the next text
  };
  return (
    <div className="body">
      <div className="sidebar">
        <div>
         <a href="https://www.instagram.com/narendraps._?igsh=YWhoaW9wZjRjcXI%3D&utm_source=qr"><FaInstagram className="insta" /></a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/narendra-singh-18a86419b"><FaLinkedin className="linkedin" /></a>   
        </div>
        <div>
        <a href="https://wa.me/8433130850"><FaWhatsapp className="whatsapp" /></a>
          
        </div>
        <div>
        <a href="https://leetcode.com/u/narendra08/"><SiLeetcode className="leetcode" /></a>
          
        </div>
      </div>
      <div className="intro">
        <div className="intro-name">
          <h1 className="firstName">
            Narendra <span className="lastName">Singh</span>
          </h1>
        </div>
        <div className="intro-work">
          <h2 className="intro1">
            I'm a{" "}
            <span className="intro2">
              <Animation1
                text={texts[currentTextIndex]}
                onComplete={handleAnimationComplete}
              />
            </span>
          </h2>
        </div>
      </div>

      <div className="heroImg">
        <img src="./hero.jpeg" alt="" />
      </div>
    </div>
  );
};
