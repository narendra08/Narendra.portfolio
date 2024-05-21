// Gallery.jsx
import React, { useState } from 'react';
import "./gallery.css";

const images = [
  'path/to/image1.jpg',
  'path/to/image2.jpg',
  'path/to/image3.jpg'
  // Add more images as needed
];

const Gallery = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="gallery">
      <h2 className='edu-head'>Gallery</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Gallery
      </button>
      {visible && (
        <div className="gallery-images">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
