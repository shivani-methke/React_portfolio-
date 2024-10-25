// // import React from 'react';
// // import './Contact.css';

// // const Contact = () => {
// //   return (
// //     <section id="contact" className="contact-section">
// //       <div className="container">
// //         <h2>Contact Me</h2>
// //         <p>Email: <a href="mailto:shivanimethke23@navgurukul">shivanimethke23@navgurukul</a></p>
// //         <p>Phone: <a href="tel:+1234567890">7757923338</a></p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;


// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact-section">
//       <div className="container">
//         <h2>Contact Me</h2>
//         <div className="contact-info">
//           <p>Email: <a href="mailto:shivanimethke23@navgurukul">shivanimethke23@navgurukul</a></p>
//           <p>Phone: <a href="tel:+1234567890">7757923338</a></p>
//         </div>
//         <div className="social-links">
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
//           </a>
//           <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
//             <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-heading">Contact Me</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:shivanimethke23@navgurukul">shivanimethke23@navgurukul</a></p>
          <p>Phone: <a href="tel:+1234567890">7757923338</a></p>
        </div>
        <div className="social-links">
          <a href="https://github.com/shivani-methke" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/shivani-methke-1a9713307/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
