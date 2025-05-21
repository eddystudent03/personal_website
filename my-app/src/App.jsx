import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portrait from './assets/1713129177219.jpg';
import hogent from './assets/hogent.jpg'; 
import cv from './assets/CV_met_foto_up_to_date.pdf'; // Your CV import
import './App.css';

function App() {
  const technologies = [
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/python.svg',
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/nodejs.svg',
    },
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/react.svg',
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/typescript.svg',
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/javascript.svg',
    },
    {
      name: 'Spring Boot',
      image: 'https://spring.io/img/spring.svg',
    },
    {
      name: 'CSS',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/css3.svg',
    },
    {
      name: 'HTML',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/html5.svg',
    },
    {
      name: 'Blazor',
      image: 'https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/05/blazor-logo.png',
    },
    {
      name: 'C#',
      image: 'https://cdn.jsdelivr.net/npm/language-icons@0.3.0/icons/csharp.svg',
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        lineHeight: 1.8,
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        color: '#fff',
        padding: '40px',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.img
          src={portrait}
          alt="Eddy Mulisho Portrait"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '25px',
            border: '4px solid #00ddeb',
            boxShadow: '0 0 20px rgba(0, 221, 235, 0.5)',
          }}
        />
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: '3em',
            color: '#1e3c72',
            marginBottom: '15px',
            fontWeight: 700,
            letterSpacing: '1px',
          }}
        >
          Eddy Mulisho
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: '1.2em',
            marginBottom: '40px',
            textAlign: 'left',
            color: '#444',
            padding: '0 20px',
          }}
        >
          Welcome to my portfolio!<br />
          Hello, I am Eddy Mulisho, a software engineer with a passion for crafting innovative web applications. With expertise in various technologies and frameworks, I'm always eager to push boundaries. I'm currently in my final year pursuing a Bachelor of Applied Computer Science at Hogent.
        </motion.p>

        {/* Education Section */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontSize: '2em',
            color: '#1e3c72',
            marginBottom: '20px',
            textAlign: 'left',
            fontWeight: 600,
          }}
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
            textAlign: 'left',
            padding: '0 20px',
          }}
        >
          <motion.img
            src={hogent}
            alt="Hogent Logo"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '10px',
              marginRight: '20px',
              filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
              position: 'relative',
              zIndex: 1,
              objectFit: 'contain',
              background: '#fff',
              padding: '5px',
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <div>
            <h3 style={{ fontSize: '1.5em', color: '#333', margin: '0 0 10px' }}>
              Bachelor of Applied Computer Science
            </h3>
            <p style={{ fontSize: '1.1em', color: '#555', margin: 0 }}>
              Hogent, 2022 – 2025
            </p>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{
            fontSize: '2em',
            color: '#1e3c72',
            marginBottom: '20px',
            textAlign: 'left',
            fontWeight: 600,
          }}
        >
          Projects
        </motion.h2>
        <ul
          style={{
            listStyleType: 'disc',
            listStylePosition: 'outside',
            textAlign: 'left',
            margin: '0 20px',
            padding: '0',
          }}
        >
          {[{
            title:"fleet management",
            description: 'A fleet management application built with React and Node.js, for Rebin',
          },{
            title:'internal tool',
            description: 'An internal tool for Rebin where they can track information about their sensors, assets do installations track their customers and users and more, built with React and Node.js, to streamline operations.',
          },
          {
            title:'chess app',
            description: 'A chess application built with React and Node.js, showcasing my skills in full-stack development.',

          },
            {
              title: 'Splendor',
              description: 'Recreated the board game Splendor using Java and JavaFX during my first year at Hogent.',
            },
            {
              title: 'FriendlyBet',
              description: 'A personal project enabling friendly betting among peers, built with modern web technologies.',
            },
            {
              title: 'Delaware Application',
              description:
                'Developed two applications for Delaware—one for customers and another for internal employees—using React and Node.js in my second year.',
            },{
              title:'todo-app',
              description: 'A simple todo application built with React and Node.js, showcasing my skills in full-stack development.',
            },
            {
              title: 'Buut Application',
              description: 'Built for BUUT, a boat rental company in Ghent, using Blazor. View it on ',
              link: 'https://github.com/HOGENT-RISE/android-2425-gent7',
              linkText: 'GitHub',
            },
          ].map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
              style={{
                fontSize: '1.1em',
                marginBottom: '15px',
                color: '#333',
                lineHeight: 1.6,
                paddingLeft: '10px',
                position: 'relative',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(10px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
            >
              <strong>{project.title}:</strong> {project.description}
              {project.link && (
                <a
                  href={project.link}
                  style={{
                    color: '#00ddeb',
                    textDecoration: 'none',
                    marginLeft: '5px',
                    fontWeight: 500,
                  }}
                  onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                  onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                >
                  {project.linkText}
                </a>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Technologies Section */}
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          style={{
            fontSize: '2em',
            color: '#1e3c72',
            margin: '40px 0 20px',
            textAlign: 'left',
            fontWeight: 600,
          }}
        >
          Technologies
        </motion.h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            padding: '0 20px',
            marginBottom: '40px',
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              style={{
                background: '#1e3c72',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '50px',
                fontSize: '1em',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span>{tech.name}</span>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#00ddeb',
                  color: '#1e3c72',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontSize: '0.9em',
                  whiteSpace: 'nowrap',
                }}
              >
                Skilled in {tech.name}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Downloadable CV Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          style={{
            margin: '40px 0',
            textAlign: 'center',
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            style={{
              fontSize: '2em',
              color: '#1e3c72',
              marginBottom: '20px',
              textAlign: 'left',
              fontWeight: 600,
              padding: '0 20px',
            }}
          >
            Resume
          </motion.h2>
          <a
            href={cv}
            download="Eddy_Mulisho_CV.pdf"
            style={{
              display: 'inline-block',
              background: '#00ddeb',
              color: '#1e3c72',
              padding: '12px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1em',
              fontWeight: 500,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Download My CV
          </a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
        style={{
          maxWidth: '900px',
          margin: '20px auto 0',
          padding: '20px',
          background: 'rgba(30, 60, 114, 0.9)',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#fff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        <p style={{ fontSize: '1em', margin: '0 0 10px' }}>
          Connect with me:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <motion.a
            href="https://www.linkedin.com/in/eddy-mulisho-48936a30a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            style={{
              color: '#00ddeb',
              textDecoration: 'none',
              fontSize: '1.1em',
              fontWeight: 500,
            }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/eddystudent03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            style={{
              color: '#00ddeb',
              textDecoration: 'none',
              fontSize: '1.1em',
              fontWeight: 500,
            }}
          >
            GitHub
          </motion.a>
        </div>
        <p style={{ fontSize: '0.9em', margin: '10px 0 0', opacity: 0.8 }}>
          © 2025 Eddy Mulisho. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}

export default App;