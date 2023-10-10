import React from 'react';
import { useState } from 'react';

export default function Product (props) {
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
      <button onClick={handlePlusClick} className="left">+</button>
      <p id="count" className="left">{count}</p>
      <button onClick={handleMinusClick} className="left">-</button>
      <div className="clear"></div>
    </div>
  </div>

   
  

  </div>)

}