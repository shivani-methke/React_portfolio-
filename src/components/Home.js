import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import shivaniImage from '../assets/shivani.jpg'; // Adjust the path according to your file structure

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="profile-image">
          <motion.img
            src={shivaniImage}
            alt="Shivani Methke"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.5 }} 
          />
        </div>
        <div className="intro-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
          >
            {/* Hello, */}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -20 }} // Initial state for heading
            animate={{ opacity: 1, y: 0 }} // Animate to final state
            transition={{ duration: 1, delay: 0.2 }} // Delay for stagger effect
          >
             Hello,<br></br>
            I'm <span className="highlight">Shivani Methke</span><br></br>
            {/* <span>Skilled in design, problem-solving, JavaScript, HTML5, CSS3, and React.js.</span> */}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }} // Initial state for paragraph
            animate={{ opacity: 1, y: 0 }} // Animate to final state
            transition={{ duration: 1, delay: 0.4 }} // Delay for stagger effect
          >
           <span className='highlight1'> Skilled in design, problem-solving, JavaScript, HTML5, CSS3, and React.js.</span>
          </motion.p>
          <motion.a
            href="#about"
            className="btn"
            initial={{ opacity: 0 }} // Initial state for button
            animate={{ opacity: 1 }} // Animate to final state
            transition={{ duration: 1, delay: 0.6 }} // Delay for stagger effect
          >
            Learn More About Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;

