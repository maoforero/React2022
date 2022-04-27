import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../Context/CartContext';
import { ProductContext } from '../../Context/ProductContext';

import '../../Styles/components/count/count.css'


function Count ({stock}) {
    const [count, setCount] = useState(0);

    function addClick(){
      if(count < stock){
        setCount(count + 1);
      }
    };

    function remClick(){
      setCount(count - 1);
    };

  return (
    <div className='container__count'>
      <div className="container__Count--Buttons">
        <button disabled={count === 0}  onClick={remClick} id="button--Decrement" className='button--actionItem'>-</button>
        <div className='Count--counter'>
          <p className='counter'>{count}</p>
        </div>
          <button onClick={addClick} id="button--Increment" className='button--actionItem'>+</button>
      </div>
      <div className="Cart--Button">
        <Link to={'/cart'} >
          <button disabled={count <= 0} id="button--Cart"> Add to Cart</button>
        </Link>
        
      </div>
    </div>
  )
}


export default Count