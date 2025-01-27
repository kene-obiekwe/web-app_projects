import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/home.css'; // Import the CSS file

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50 font-sans">
      {/* Navigation Bar */}
      <nav className="navigation-bar bg-green-500 text-white p-4 flex justify-between items-center">
        <div className="navigation-bar-left flex space-x-4 items-center">
          <Link to="/" className="active hover:text-green-200 font-bold">Home</Link>
          <Link to="/patient-biodata/create" className="hover:text-green-200">Create Patient Records</Link>
          <Link to="/patient-records/view" className="hover:text-green-200">View Patient Records</Link>
          <Link to="/about-us" className="hover:text-green-200">About Us</Link>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-section flex-grow flex flex-col items-center justify-center bg-green-200 text-green-900 text-center p-8">
        <h1 className="text-4xl mb-4">Welcome to ToothFixers</h1>
        <p className="text-xl">Your smile is our priority. We offer comprehensive dental care for the whole family.</p>
        <img src="/dentist.ico" alt="Logo" className="h-20 w-20 mr-4" />
      </div>
    </div>
  );
};

export default Home;
