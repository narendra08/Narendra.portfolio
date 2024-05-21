// Blogs.jsx
import React from 'react';
import BlogCard from './Blogs-card';
import "./blogs.css" // Adjust the path if needed

const blogs = [
  {
    title: "Design patterns In Javascript",
    description: "Multiple design patterns in javascript",
    link: "https://example.com/first-blog"
  },
  {
    title: "Low level design",
    description: "low level designing of diffrent applications",
    link: "https://example.com/second-blog"
  },
  {
    title: "A trip to bali",
    description: "This is the blog on my recent trip to Bali, Indonesia",
    link: "https://example.com/first-blog"
  },
  {
    title: "How to lose weight faster in Gym",
    description: "I am a fitness enthusiast and here is my experience on how to lose fat.",
    link: "https://example.com/second-blog"
  },
  {
    title: "How to animations in React",
    description: "Animations in React using Framer",
    link: "https://example.com/second-blog"
  },
  {
    title: "How to Start DSA for beginner",
    description: "How to start your DSA if you are a biginner",
    link: "https://example.com/second-blog"
  },
  // Add more blogs here
];

const Blogs = () => (
    <div  className='blogs' id='Blogs'>
        <div className="blogs-header">
            <h1>Blogs</h1>
        </div>
        <div className="blogs-container">
    {blogs.map((blog, index) => (
      <BlogCard
        key={index}
        title={blog.title}
        description={blog.description}
        link={blog.link}
      />
    ))}
  </div>
    </div>
  
);

export default Blogs;
