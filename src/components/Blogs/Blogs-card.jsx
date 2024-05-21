// BlogCard.jsx
import React from 'react';
import "./blogs-card.css"; // Adjust the path if needed

const BlogCard = ({ title, description, link }) => (
  <div className="blog-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
  </div>
);

export default BlogCard;
