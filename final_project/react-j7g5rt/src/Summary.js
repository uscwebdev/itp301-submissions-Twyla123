import React from 'react';
import './index.css';
import './summary.css';



export default function Summary() {

  return (
    
        <div className="container">
  
          <h1 className="title">Project Summary</h1>

          <h2 className="Stitle">Topic and Purpose</h2>
          <p className="sum" >My website is about my personal resume/CV, because I want my resume to look more creative and different. Another thing is that I want to show how much I have achieved in the web development field. And this project allows me apply what I learned from the class to my life.</p>

          <h2 className="Stitle">How my site works</h2>
          <p className="sum" >The first page of my site is the weather forcast API. Users can enter the name of a city and check the current weather condition in that city. Then the rest of the website is about my resume. Provide instructions on how your site works. I used two different APIs from the same website, since the weather API requires unique citykey that are retrieved from another location API. Here is the
          <a href="https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D"> weather API</a> and  <a href="https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search">City Search API</a>. </p>
      


    </div>
     
  );
}
