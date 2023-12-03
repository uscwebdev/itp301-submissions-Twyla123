import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AboutMe from './AboutMe.js';
import Resume from './Resume.js';
import Weather from './Weather.js';
import ContactMe from './ContactMe.js';
import Summary from './Summary.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>

    <div id="header">
            <h1>Welcome to my website</h1> 
      </div>


      <div id="nav-wrapper">
          <div id ="nav">
          <a href="#Weather">Weather</a>
              <a href="#about-me">About Me</a>
              <a href="#resume">Resume</a>
              <a href="#ContactMe">Contact Me</a>
          </div>
      </div>


      <div id="Weather">
      <Weather />
      <div id="footer">
      <p> Enjoy! </p>
      </div>
      </div> 

      <div id="about-me">
      <AboutMe />
      <div id="footer">
      <p> Enjoy! </p>
      </div>
      </div> 

      <div id="resume">
      <Resume />
      <div id="footer">
      <p> Enjoy! </p>
      </div>
      
      
      </div> 

      <div id="ContactMe">
      <ContactMe />
      <div id="footer">
      <p> Enjoy! </p>
      </div>
      </div> 

      <div id="Summary">
      <Summary />
      <div id="footer">
      <p> Enjoy! </p>
      </div>
      </div> 
    
    
  </React.StrictMode>
);