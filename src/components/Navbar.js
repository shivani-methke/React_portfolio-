import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo1">Shivani Methke</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="https://drive.google.com/file/d/11TsewLWHtcy-rrOLRP37fq_ub2Ldny0t/view?usp=sharing">Resume</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





