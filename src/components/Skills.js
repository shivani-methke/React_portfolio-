// import React from 'react';
// import './Skills.css';

// const Skills = () => {
//   return (
//     <section id="skills" className="skills-section">
//       <div className="container">
//         <h2>My Skills</h2>
//         <div className="skills-grid">
//           <div className="skill">
//             <h3>HTML</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>CSS</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>JavaScript</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>React.js</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>Mongoose</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>MongoDB</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>JWT</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>Express.js</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>Node.js</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>
//           <div className="skill">
//             <h3>Redux</h3>
//             <div className="progress-bar">
//               <div className="progress" style={{width: '90%'}}></div>
//             </div>
//           </div>

//           {/* Add more skills */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'HTML', percentage: '90%', color: '#E44D26' }, // Red
    { name: 'CSS', percentage: '90%', color: '#1572B6' }, // Blue
    { name: 'JavaScript', percentage: '70%', color: '#F7DF1E' }, // Yellow
    { name: 'React.js', percentage: '70%', color: '#61DAFB' }, // Light Blue
    { name: 'Mongoose', percentage: '70%', color: '#A47C7C' }, // Brown
    { name: 'MongoDB', percentage: '70%', color: '#47A248' }, // Green
    { name: 'JWT', percentage: '70%', color: '#4A5A68' }, // Dark Gray
    { name: 'Express.js', percentage: '70%', color: '#39B54A' }, // Green
    { name: 'Node.js', percentage: '60%', color: '#8CC84B' }, // Light Green
    { name: 'Redux', percentage: '70%', color: '#764ABC' }, // Purple
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill" key={index}>
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: skill.percentage,
                    backgroundColor: skill.color // Use skill color here
                  }}
                >
                  <span className="percentage">{skill.percentage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
