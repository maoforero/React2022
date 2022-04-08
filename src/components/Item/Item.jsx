import React from 'react'
import Count from '../Count/Count'
import '../Item/item.css'

function Item({id, name, price, image}) {
  return (
    <div key={id} className='container__item'>
      <div className="container__item--img">
        <img src={image} alt={name}/>
      </div>
      <div className="container__item--info">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
      <Count stock={10}/>
    </div>
  )
}

export default Item;