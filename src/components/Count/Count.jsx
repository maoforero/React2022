import React, { Fragment } from 'react'

const Count = () => {
  return (
    <Fragment>
      <div className="container__Count--Buttons">

        <div className="Count--Buttons">
          <button id="button--Increment">+</button>
          <button id="button--Decrement">-</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Count