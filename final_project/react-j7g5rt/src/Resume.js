import React from 'react';
import './resume.css';


export default function Resume() {

  return (
    
        <div className="container">
  
          <h1 className="title">Resume</h1>
          <div className="resume">
        <header className="resume-header">
            <h1>XINXIN(TWYLA) ZHANG</h1>
            <p>Los Angeles, CA | 484-705-9133 | twylazha@usc.edu</p>
        </header>

        <div className="education">
            <h2>Education</h2>
            
            <div className="institution">
                <h3>University of Southern California</h3>
                <p>Double Bachelor's Degrees in Economics and Data Science</p>
                <p>Current GPA: 3.88/4.00</p>
               
            </div>

            <div className="institution">
                <h3>University of Wisconsin Madison</h3>
                <p>Double Bachelor's Degrees in Economics and Data Science</p>
                <p>Current GPA: 3.98/4.00</p>
               
            </div>

        </div>

        <img src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAwNjkyMTA1MDcxMzA2MTE0/usatsi_21337956.jpg" alt="USC Mascot" className="mascot"/>

        <img src="https://news.wisc.edu/content/uploads/2018/05/Bucky_Parade18_6759-1-1024x681.jpg" alt="UWM Mascot" className="mascot"/>

        <div className="clearfloat"></div>


        <div className="section">
        <h2>Projects</h2>
        <h3>Final Project, Objected-Oriented Programming</h3>
        <ul>
            <li>Used Java to design and implement a program that resembles Evite.com, including two inheritance hierarchies for both host and users, a system that allows read and write user data to and from a file, and a text-based interface with a menu;</li>
        </ul>

        <h3>Individual Research on Race and Housing Ownership</h3>
        <ul>
            <li>Analyze the social problem of income inequality between white people and black people through housing ownership and the impact of education on housing ownership.</li>
        </ul>


        <div className="section">
        <h2>Work Experience</h2>
        <h3>Teaching Assistant, Afghan Pathways Program</h3>
        <ul>
            <li>USC, Los Angeles, CA</li>
            <li>Provide help and grade homework for Afghan students who are female and are not allowed to study.</li>
            
        </ul>
    </div>

    <div className="section">
        <h2>Honors and Awards</h2>
        <ul>
            <li>USC Dornsife Dean’s List for Spring 2023</li>
            <li>USC Dornsife Dean’s List for Fall 2022</li>
            <li>College of Letters and Science Dean’s List at UW-Madison</li>
            <li>Honorable Mention, 23rd Annual High School Mathematical Contest of Modeling</li>  
            <li>...</li>         
        </ul>
    </div>

    <div className="section">
        <h2>Skills</h2>

        <ul>
              <li>Python </li>
              <li>Java </li>
              <li> HTML/CSS </li>
              <li> JavaScript </li>
              <li> Software: Stata, Excel, IntelliJ IDEA, Visual Code Studio, Jupyter Notebook </li>
              <li>...</li>
            
        </ul>
    </div>

    <div className="section">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>Archery</li>
          <li> Spark(Volunteered English Tutor)</li>
          <li>Economics Student Association</li>
          <li>...</li>          
        </ul>
    </div>


         
    </div>
        </div>
    </div>
     
  );
}
