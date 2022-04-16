import React from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/components/item/item.css'

function Item({id, name, price, image}) {
  return (
    <div key={id} className='container__item'>
      <div className="container__item--img">
        <img className='item--img' src={image} alt={name}/>
      </div>
      <div className="container__item--info">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
      <div className="container__buttonItemDetail">
        <button className='buttonItemDetail'>
          <Link to={`/menu/${id}`}>Details</Link>
        </button>
      </div>
    </div>
  )
}

export default Item;