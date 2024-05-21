// About.jsx
import React from "react";
import Education from "./Eduction";
import Fitness from "./Fitness";
import Gallery from "./Gallery";
import Achievements from "./Achievement";
import "./about.css";

const About = () => (
  <div className="about" id="About">
    <div className="about-header">
      <h1>About</h1>
    </div>
    <div className="about-content">
      <Education />
      <Fitness />
      <Gallery />
      <Achievements />
    </div>
  </div>
);

export default About;
