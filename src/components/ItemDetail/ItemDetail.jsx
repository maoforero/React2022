import React, { useState } from 'react';
import Count from '../Count/Count';
import '../../Styles/components/ItemDetail/ItemDetail.css'

const ItemDetail = (props) => {

  let idItem = props;

  return (
    <div key={idItem.id} className="containerItemDetail">
      <div className="container__ItemDetail--img">
        <img src={idItem.img} alt="" className='ItemDetail--img'/>
      </div>
      <div className="container__ItemDetail--info">
        <h6 className="ItemDetail--infoTitle">{idItem.name}</h6>
        <p className="ItemDetail--infoDescription">{idItem.info}</p>
        <p className="ItemDetail--infoPrice">{idItem.price}</p>
      </div>
      <div className="ItemDetail--buttonsIteractions">
        <div className="countInteractions">
          <p className="count">{idItem.info}</p>
        </div>
        <div className="buttonsInteractions">
          <Count stock={idItem.stock} name={idItem.name} id={idItem.id} price={idItem.price}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;