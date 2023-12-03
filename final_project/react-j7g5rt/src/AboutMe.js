import React from 'react';
import './about.css';


export default function AboutMe() {

  return (
    
        <div className="container">
  
          <h1 className="title">About Me</h1>

          <div className="aboutP">
          <p>"Hello, I'm Twyla Zhang, but you can call me Twyla. Currently, I'm pursuing double Bachelor's degrees in Economics and Data Science at the University of Southern California. Prior to this, I studied at the University of Wisconsin, Madison. My academic journey is marked by a strong focus on programming and statistical analysis, with key courses including Object-Oriented Programming, Introduction to Econometrics, and Front-End Web Development. I've applied these skills in various projects. Outside of academics and work, I enjoy exploring diverse interests like archery, photography, exercise, and so on. I'm excited about to apply my skills and experiences in new environments and look forward to collaborating with others who share my passion for economics, data science, and social impact."</p>
          </div>

          <div className="column">
            <img src="https://cdn.pixabay.com/photo/2014/09/25/00/43/target-459833_1280.jpg" alt="arhcery" className="image"/>
            <p>I just started practicing archery this semester, and it was really fun for me. I need to completely focus when I shoot the arrow, which requires me to block out everything else, fully immersing myself into the present moment of shooting. Releasing of the and shooting the arrow into the board produces a feeling of satisfaction, which helps to release my stress. Every successful shot not only brings a sense of accomplishment but also fuels my desire to improve. Also, the archery club is en inclusive and welcoming community. I made some friends there. </p>
          </div>

          <div className="column">
              <img src="https://img.freepik.com/premium-photo/female-photographer-with-camera-young-women-love-taking-pictures-camera-lover-taking-pictures-yellow-studio_24883-4926.jpg" alt="photography" className="image"/>
              <p> Photography, for me, is an endlessly fascinating journey of discovery and creativity. Most of the time, when I pick up my camera, I have no idea how to caputre a good photo until I took hundreds of photos. It demands imagination, creativity, understanding of the surrounding and its connection to the subject. The way light plays with shadows, the subtle nuances of colors, and the unique stories that each subject tells, all of it feels like a canvas waiting for my interpretation. Sometimes, I have great idea in my mind, but I could not product it as I want. Therefore, I'm constantly learning new techniques, experimenting with different angles and compositions to bring a fresh perspective to my images. The more I delve into photography, the more I realize how much there is to explore and master. Alhough photography is hard, good photos that are randomly captured always motivate me to improve and explore as a photography enthusiast.</p>
          </div>

              <div className="clearfloat"></div>
            
          


    </div>
     
  );
}
