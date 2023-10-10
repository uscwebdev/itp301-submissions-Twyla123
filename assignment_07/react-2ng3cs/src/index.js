import React from 'react';
import {createRoot} from 'react-dom/client';
import Product from './Product.js';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
  
    <div class="header">
      <h1>Twyla's restaurant</h1>
    </div>
    
  <div className="container">
  <h1>Please order the food you want!</h1>
    <Product name="Fettuccine Alfredo" src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1.jpg" price="15"/>
    <Product name="Cucumber Shrimp Appetizer" src="https://www.cookincanuck.com/wp-content/uploads/2022/12/Cucumber-Shrimp-Appetizers-Blog-5.jpg" price="11" />

    <div className="clear"></div>

    <Product name="Chocolate Cake" src="https://joyfoodsunshine.com/wp-content/uploads/2020/08/best-chocolate-cake-recipe-from-scratch-8.jpg" price="8" />
    <Product name="Shirley Temple" src="https://www.liquor.com/thmb/D8NjZBw1zc3fZaX70olz_q7oPuI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shirley-temple-720x720-primary-e0fa3d9417e94ae18fe5cee2131862fb.jpg" price="9" />

    <div className="clear"></div>

    <div className="footer">
      <p>@Twyla's restaurant</p>
    </div>
</div>
</React.StrictMode>

);
