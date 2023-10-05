import React from 'react';
import { useState } from 'react';


export default function ImgButtons() {

  const [src, setSrc] = useState(
    'https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2.png'
  );

  const [alt, setAlt] = useState('default');

  const [caption, setCap] = useState('Default Image');

  function handleImgChange(newSrc, newCaption, newAlt){
    setSrc(newSrc);
    setAlt(newAlt);
    setCap(newCaption);
  }

  return (
    <div id="imgButtons">

      <div className="left">
      <button onClick={() => {
        handleImgChange("https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-scenery-free-photo.jpg?w=2210&quality=70", "image 1", "image1" );
      }}>
          Image 1
      </button>
      </div>
      
      <div className="left">
      <button
          onClick={() => {
            handleImgChange("https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60", "image 2", "image2" );
          }}>
          Image 2
      </button>
      </div>


      <div className="left">
      <button
          onClick={() => {
            handleImgChange("https://images.pling.com/img/00/00/66/78/52/1848924/road-summer-beautiful-natural-scenery-desktop-wallpapers-wallpaper-1280x1024-10wallpaper.com1.jpg", "image 3", "image3" );
          }}>
          Image 3
      </button>
      </div>

     

      <div className="left">
      <button
          onClick={() => {
            handleImgChange("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQGfjGWX_BHikhSzGt1Lrrey7eJ6qWiszMw&usqp=CAU", "image 4", "image4" );
          }}>
          Image 4
      </button>
      </div>

 

      <div className="left">
      <button
          onClick={() => {
          handleImgChange("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/most-beautiful-nature-landscape-by-elvin-siew-chun-wai-elvin-siew-chun-wai.jpg", "image 5", "image5" );
        }}>
          Image 5
      </button>
      </div>
   
      <div className="clear"></div>

      <div className="image">
        <img src={src}  alt={alt}/>
      
        <h3 id="caption">{caption}</h3>
      </div>

    </div>
  )
  
}

