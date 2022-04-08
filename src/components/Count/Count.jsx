import React, { useState } from 'react';
import '../../Styles/components/count.css'

function Count ({stock, initial}) {
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
    <div className='container__count'>
      <div className="container__Count--Buttons">
          <button onClick={addClick} id="button--Increment" className='button--actionItem'>+</button>
          <div className='Count--counter'>
            <p className='counter'>{count}</p>
          </div>
          <button disabled={count === 0}  onClick={remClick} id="button--Decrement" className='button--actionItem'>-</button>
      </div>
      <div className="Cart--Button">
        <button disabled={count <= 0}  onClick={msmCart} id="button--Cart">Add to cart</button>
      </div>
    </div>
  )
}


export default Count