import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="container">
        <h2>About Me</h2>
        <p>
        I have strong skills in web development, especially in HTML, CSS, JavaScript, and React.js. I love finding solutions to problems and turning ideas into functional projects through technology. I’m excited to begin my career as a software engineer, where I can apply my skills and contribute to impactful projects. I’m looking forward to working in a tech-focused company that values innovation and growth. My goal is to use my technical expertise to make a difference and help bring new ideas to life.


        </p>
      </div>
    </motion.section>
  );
};

export default About;

