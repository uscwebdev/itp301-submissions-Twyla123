import React from 'react';
import { useState } from 'react';

export default function Allproduct (prop) {
  const [subtotal, setSubtotal] = useState(0);

  function subtotalClick(n) {
    setSubtotal(subtotal + n);
  }

  function subtotalMinus(n) {
    if (subtotal > 0){
      setSubtotal(subtotal - n);
    } else{
      alert("can not be negative value!")
    }
  }

  return (
    <div>
      <h1>Please order the food you want!</h1>
      <h2>subtotal:$ {subtotal} </h2>
      
      <Product name="Fettuccine Alfredo" src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1.jpg" price="15" 
      subtotalPlus={subtotalClick}     subtotalMinus={subtotalMinus}
      />

      <Product name="Cucumber Shrimp Appetizer" src="https://www.cookincanuck.com/wp-content/uploads/2022/12/Cucumber-Shrimp-Appetizers-Blog-5.jpg" price="11"  
       subtotalPlus={subtotalClick}     subtotalMinus={subtotalMinus}
       />
  
      <div className="clear"></div>
  
      <Product name="Chocolate Cake" src="https://joyfoodsunshine.com/wp-content/uploads/2020/08/best-chocolate-cake-recipe-from-scratch-8.jpg" price="8" 
       subtotalPlus={subtotalClick}     subtotalMinus={subtotalMinus}
       />

      <Product name="Shirley Temple" src="https://www.liquor.com/thmb/D8NjZBw1zc3fZaX70olz_q7oPuI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shirley-temple-720x720-primary-e0fa3d9417e94ae18fe5cee2131862fb.jpg" price="9"   
       subtotalPlus={subtotalClick}     subtotalMinus={subtotalMinus}
       />
  
      <div className="clear"></div>
    </div>
  );
  
}

function Product(props) {  
  const [count, setCount] = useState(0);
  
  function handlePlusClick() {
    setCount(count + 1);
  }

  function handleMinusClick() {
    if (count > 0){
      setCount(count - 1);
    } else{
      alert("can not be negative value!")
    }
  }

 return ( <div>
    <div className="item">
      <img src={props.src} alt= {props.name + " image"} />
      <h3>{props.name}</h3>
      <h4>Price: ${props.price}</h4>

      <div className="order">
        <button onClick={() => {
        handlePlusClick()
        props.subtotalPlus(parseInt(props.price));
        }}

        className="left">+</button>
        <p id="count" className="left">{count}</p>
        <button onClick={() => {
        handleMinusClick()
        props.subtotalMinus(parseInt(props.price));
        }}

        className="left">-</button>
        <div className="clear"></div>
      </div>
    </div>
  </div>);
  
}

