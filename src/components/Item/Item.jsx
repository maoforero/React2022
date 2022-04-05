import React from 'react'

function Item({id, name, price, description, image}) {
  return (
    <div key={id} className='container__item'>
      <div className="container__item--img">
        <img src={image} alt={name}/>
      </div>
      <div className="container__item--info">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Item