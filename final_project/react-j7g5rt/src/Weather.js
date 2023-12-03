import React from 'react';
import { useState } from 'react';
import $ from 'jquery';
import './weather.css';


export default function Weather() {
  const [city, setCity] = useState('');
  const [cityKey, setcityKey] = useState('347625');
  const [key, setKey] = useState('huyfzA6NikKGUpiOBVaEulFvvZQCKt0j'); 
  const [dayTime, setDaytime] = useState(''); 
  const [precip, setPrecip] = useState(''); 
  const [weatherText, setText] = useState(''); 
  const [link, setLink] = useState(''); 
  const [temp, setTemp] = useState(0); 

  
  function handleOnSubmit(e) {
    e.preventDefault();
  
  $.ajax({
    url:
      'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=' + key + '&q=' + city,
    dataType: 'json',
    success: function (response) {
      console.log(response);
      console.log(response[0].Key);
      //request the city key through user input
      //setcityKey(response[0].Key);    
      //Since I immediately use cityKey right after setting it, it does not update immediately.
      // I use response[0].Key directly.
      console.log(cityKey);   

      //use the citykey to get the current weather
      $.ajax({
        url:
          'https://dataservice.accuweather.com/currentconditions/v1/'+ response[0].Key + '?apikey=' + key,
        dataType: 'json',
        success: function (re) {
          console.log(re[0]);
          //setUpWeather(re[0]);

          //HasPrecipitation
          if (re[0].HasPrecipitation){
            setPrecip('Currently, there is precipitation in your city. Please stay warm. Don not forget the bring your umbrella!')
          }else{
            setPrecip('Currently, there is no precipitation in your city.')
          }
          
          //dayTime
          if (re[0].IsDayTime){
            setDaytime('Now, it is daytime.')
          }else{
            setDaytime('Now, it is night time.')
          }

          //link
          setLink(re[0].Link);

          //Temperature
          setTemp(re[0].Temperature.Imperial.Value);

          // Weather text
          setText(re[0].WeatherText);
          
           
        },
        error: function (error) {
          console.log(error);
        },
      });

      
    },
    error: function (error) {
      console.log(error);
    },
  });

  // function setUpWeather(e) {
  //   //HasPrecipitation
  //   if (e[0].HasPrecipitation){
  //     setPrecip('Currently, there is precipitation in your city. Please stay warm. Don't forget the bring your umbrella!')
  //   }else{
  //     setPrecip('Currently, there is no precipitation in your city.')
  //   }
    
  //   //dayTime
  //   if (e[0].IsDayTime){
  //     setDaytime('Now, it is daytime.')
  //   }else{
  //     setDaytime('Now, it is night time.')
  //   }

  //   //link
  //   setLink(e[0].Link);

  //   //Temperature
  //   setTemp(e[0].Temperature.Imperial.Value);

  //   // Weather text
  //   setText(e[0].WeatherText);
  // }






}

  return (
    
        <div className="container">

          <h1 className="title">Weather Forcast</h1>

          <form id="weather-form" onSubmit={handleOnSubmit}>

            <label htmlFor="city">
                Which city do you live?:
          </label>
              <input
                type="text"
                id="city"
                placeholder="Please enter a city name"
                value={city}
                onChange={(e) => {
                  setCity(e.currentTarget.value);
                }}
              />

            <button type="submit">
                  Submit
            </button>
            </form>

        

            <div id="weather-info">
              <p> {dayTime}  {precip}  </p>
              <p> Temperature: {temp} °F</p>
              <p> Weather: {weatherText} </p>
              <p> If you want to know more details, please check out this  <a href={link}> link </a>.</p>
            </div>
           

           
            
    </div>
     
  );
}





