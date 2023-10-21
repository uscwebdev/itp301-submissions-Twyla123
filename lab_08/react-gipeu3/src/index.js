import React from 'react';
import {createRoot} from 'react-dom/client';
import Allproduct from './Allproduct.js';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
  
    <div class="header">
      <h1>Twyla's restaurant</h1>
    </div>
    
  <div className="container">
    <Allproduct />
  
    <div className="footer">
      <p>@Twyla's restaurant</p>
    </div>
</div>
</React.StrictMode>

);
