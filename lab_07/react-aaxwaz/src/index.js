import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ImgButtons from './ImgButtons.js';


const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div className="container">
    <h1>Photo Gallery</h1>

    <ImgButtons/>
 
    </div>

  </React.StrictMode>
);

