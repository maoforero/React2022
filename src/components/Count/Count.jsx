import React, { Fragment, useState } from 'react';

const Count = (stock, initial, onAdd) => {

  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <div className="container__Count--Buttons">
        <div className='Count--p'>
          <p>{count}</p>
        </div>
        <div className="Count--Buttons">
          <button id="button--Increment">+</button>
          <button id="button--Decrement">-</button>
        </div>
        <div className="Cart--Button">
          <button id="button--Cart">Add to cart</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Count