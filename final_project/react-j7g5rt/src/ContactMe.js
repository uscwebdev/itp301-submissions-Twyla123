import React from 'react';
import './contact.css';



export default function ContactMe() {

  return (
    
        <div className="container">
  
          <h1 className="title">Contact Me</h1>
        
        <form id="contact">

      <div className="left">
        <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Enter your name" required/>
        </div>


        <div className="form-row">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="youremail@gmail.com" />
        </div>

        <div className="form-row">
        <label htmlFor="Phone">Phone:</label>
        <input id="Phone" type="text" placeholder="(123)-456-1234" required />
        </div>


      </div>

      <div className="left">
        <div className="form-row">
        <label htmlFor="intent"> Are you a </label>
        <select id="intent">
          <option value="Student">Student</option>
          <option value="Professor">Professor</option>
          <option value="Employer">Employer</option>
        </select>
        </div>

        <div className="form-row">
        <label htmlFor="Comment">Comment:</label>
        <textarea id="Comment" placeholder="Do you have any question? "></textarea>
        </div>
        
      </div>

    <div className="clearfloat"></div>

    <div id="bottom">
      <div className="form-row">
        <label> I agree to accept Terms and Conditions</label>
        <label htmlFor="agree">
          <input id="agree" type="radio" name="agree" value="yes" required />Yes
        </label>
        <label htmlFor="no">
          <input id="no" type="radio" name="no" value="no" />No
        </label>
        </div>

      <div className="form-row">
        <button id="submit-btm" type="submit">Submit</button>
        <button type="reset">Reset</button>
        </div>
    </div>

    </form>

        

    </div>
     
  );
}
