import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/components/count/count.css'

function Count ({stock, initial}) {
    const [count, setCount] = useState(0);
    const countProps = count;

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
        <button disabled={count === 0}  onClick={remClick} id="button--Decrement" className='button--actionItem'>-</button>
        <div className='Count--counter'>
          <p className='counter'>{count}</p>
        </div>
          <button onClick={addClick} id="button--Increment" className='button--actionItem'>+</button>
      </div>
      <div className="Cart--Button">
        <Link to={'/cart'} state={countProps}>
          <button disabled={count <= 0}  onClick={msmCart} id="button--Cart"> Add to Cart</button>
        </Link>
        
      </div>
    </div>
  )
}


export default Count