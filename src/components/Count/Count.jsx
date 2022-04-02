import React, { useState } from 'react';

function Count () {
    const [count, setCount] = useState(0);

    function addClick(){
      setCount(count + 1);
    };

    function remClick(){
      setCount(count - 1);
    };

    function msmCart(){
      alert(`${count} Agregados a el carrito`);
    }

  return (
    <div>
      <div className="container__Count--Buttons">
        <div className='Count--p'>
          <p>{count}</p>
        </div>
        <div className="Count--Buttons">
          <button onClick={addClick} id="button--Increment">+</button>
          <button onClick={remClick} id="button--Decrement">-</button>
        </div>
      </div>
      <div className="Cart--Button">
        <button onClick={msmCart} id="button--Cart">Add to cart</button>
      </div>
    </div>
  )
}


export default Count