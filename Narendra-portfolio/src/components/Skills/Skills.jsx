import React from "react";
import { FaReact } from "react-icons/fa";
import "./skills.css";

export const Skills = () => {
  return (
    <div className="skills-section" id="Skills">
      <div className="skill-heading">
        <h1>SKILLS</h1>
      </div>
      <div>
      <div class="card-container">
    <div class="card">
      <h2>Frontend Skills</h2>
      <ul>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Redux</li>
      </ul>
    </div>
    <div class="card">
      <h2>Backend Skills</h2>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>REST API</li>
        <li>Kafka</li>
        <li>RabbitMQ</li>
        <li>Redis</li> 
        <li>Jest</li>
        <li>REST API</li>
      </ul>
    </div>
    <div class="card">
      <h2>Deployment Skills</h2>
      <ul>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Heroku</li>
        <li>Netlify</li>
        <li>Vercel</li>
        <li>AWS</li>
      </ul>
    </div>
    <div class="card">
      <h2>Languages & Tools</h2>
      <ul>
      <li>Javascript</li>
        <li>Typescript</li>
        <li>Desig Patterns</li>
        <li>Problem Solving</li>
        <li>OOPs</li>
        <li>JIRA</li>
        <li>Git</li>
        <li>Postman</li>
        <li>VSCode</li>
      </ul>
    </div>
  </div>
      </div>
    </div>
  );
};
