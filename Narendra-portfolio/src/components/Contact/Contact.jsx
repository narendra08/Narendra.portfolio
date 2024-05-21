// Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => (
  <div className="contact" id='Contact'>
    <h2 >Contact</h2>
    <div className="contact-icons">
      <a href="narendrapratap.98@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
      <a href="tel:+918433130850" target="_blank" rel="noopener noreferrer">
        <FaPhone />
      </a>
      <a href="https://leetcode.com/u/narendra08/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
      </a>
      <a href="https://www.instagram.com/narendraps._?igsh=YWhoaW9wZjRjcXI%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/narendra-singh-18a86419b" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://wa.me/8433130850" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://github.com/narendra08" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default Contact;
