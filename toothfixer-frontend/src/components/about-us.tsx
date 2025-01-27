import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/about-us.css'; // Import the CSS file

const AboutUs: React.FC = () => {
  return (
    <div className="grid-container">
      <div className="navigation-bar">
        <div className="nav-links">
          <Link className="hover:text-green-200" to="/">Home</Link>
        </div>
        <img src="/dentist.ico" alt="Logo" className="h-8 w-8 mr-2" />
      </div>
      <div className="about-us-section grid-item-row-2">
        <h1>About Us</h1>
        <p>Welcome to our revolutionary web application designed for ToothFixers' dental clinic. Our platform allows multiple dentists to efficiently manage their patients' clinical records.</p>
        <p>Features of our application include:</p>
        <ul>
          <li><strong>Create:</strong> Add new patient records easily.</li>
          <li><strong>Read:</strong> View detailed patient information at a glance.</li>
          <li><strong>Update:</strong> Modify existing patient records with up-to-date information.</li>
          <li><strong>Delete:</strong> Remove patient records as needed.</li>
        </ul>
        <p>Our mission is to streamline dental clinic operations and improve patient care through technology.</p>
      </div>
    </div>
  );
};

export default AboutUs;
