import React from 'react'
import './header.css';
import { useNavigate } from 'react-router-dom';
import { CgMenuMotion } from "react-icons/cg";
export const Header1 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/newpage'); // Navigate to the new page
  };
  return (
    <div className='header'>
      <div className='logo'>
        <a href="#Home"><img  className ="logoImg" src="https://pbs.twimg.com/profile_images/1094627885560795136/oJtasdKO_400x400.jpg" alt="" /></a>
      
      </div>
      <div className='menu-container' >
        <ul className='menu-list'>
          <li><a id='' href="#Home">Home</a></li>
          <li><a id=''href="#Skills">Skills</a></li>
          <li><a id=''href="#Projects">Projects</a></li>
          <li><a id=''href="#Blogs">Blogs</a></li>
          <li><a id=''href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
