import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../Context/CartContext';

import '../../Styles/components/count/count.css'


function Count ({stock, item}) {
    const [count, setCount] = useState(0);
    const { countTotal } = useContext(CartContext);
    const { addToCart } = useContext(CartContext);

    let isActive = false;

    function addClick(){
      if(count < stock){
        setCount(count + 1);
        isActive = true;
      }
    };

    function remClick(){
      setCount(count - 1);
    };

  return (
    <div className="container__count">
      <div className="container__Count--Buttons">
        <div className="Count--counter">
          <p className="counter">Cantidad: {count}</p>
        </div>
        <div className='counter--buttons'>
          <button
            disabled={count === 0}
            onClick={remClick}
            id="button--Decrement"
            className="button--actionItem"
          >
            -
          </button>
          |
          <button
            onClick={addClick}
            id="button--Increment"
            className="button--actionItem"
          >
            +
          </button>
        </div>
        
      </div>
      <div className="Cart--Button">
        <Link to={"/cart"} className="Cart--Button--Link">
          <button
            disabled={count <= 0}
            className="button--cart"
            onClick={() => {
              addToCart(item, count);
              countTotal(count);
            }}
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}


export default Count