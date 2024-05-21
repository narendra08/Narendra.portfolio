import React from "react";
import YT from "../../../public/YT.jpg";
import "./projects.css";
export const Projects = () => {
  return (
    <div>
      <section className="portfolio" id="Projects">
        <div className="project-heading">
          <h1>PROJECTS</h1>
        </div>

        <div className="projects-container">
          <div className="project-card">
            <img
              className="project-img"
              src="../../../public/wms.jpg"
              alt="Project 1"
            />
            <h3>Workflow Managment System</h3>
            <p>
              It helps user to create, update, modify a workflow. There can be
              multiple roles as participant who can create workflows instances,
              a Monitor who can audit the workflows and raise disputes and
              operator who can create particiapant,monitors, asset category ,
              asset profile and can generate reports for the workflow.A platform
              Admin who can create operators or tenants. A complete solution to
              your supply chain management.
            </p>
          </div>
          <div className="project-card">
            <img src="../../../public/hotel.jpg" alt="Project 2" />
            <h3>Hotel App</h3>
            <p>
              A hotel website serves as a comprehensive platform for guests to
              explore and book accommodations. It showcases the hotel's
              amenities, rooms, and services through high-quality images and
              detailed descriptions. The website typically includes an online
              booking system, special offers, and packages to attract potential
              guests. It also provides essential information such as location,
              contact details, dining options and local attractions.
            </p>
          </div>
          <div className="project-card">
            <img src="../../../public/NGO.jpg" alt="Project 3" />
            <h3>NGO Website</h3>
            <p>
              An NGO website dedicated to helping children and widows serves as
              an informative and interactive platform to promote its mission and
              initiatives. It highlights various programs, such as education,
              healthcare, and vocational training, aimed at improving the lives
              of vulnerable groups. The website includes success stories,
              volunteer opportunities, and ways to donate, encouraging public
              support and engagement.
            </p>
          </div>
          <div className="project-card">
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone-noir.png"
              alt="Project 4"
            />
            <h3>Youtube Clone</h3>
            <p>
              A youtube clone that loads trending videos, search videos on name
              of channel or by tagline. It is same replica of youtube.
            </p>
          </div>
          <div className="project-card">
            <img
              src="https://th.bing.com/th/id/OIP.WCqK6XavZC3o_vWbiDsfxQAAAA?rs=1&pid=ImgDetMain"
              alt="Project 5"
            />
            <h3>AI Projects</h3>
            <p>
              An AI project that generate anime character on writing a text.
              ...More projects on AI to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
