import React from 'react';
import Count from '../Count/Count';

const ItemDetail = ({product}) => {
  return (
    <div>
      <h1>ITEM</h1>

      <div className="containerItemDetail">
        <div className="container__ItemDetail--img">
          <img src="" alt="" className='ItemDetail--img'/>
        </div>
        <div className="container__ItemDetail--info">
          <h6 className="ItemDetail--infoTitle">Titulo</h6>
          <p className="ItemDetail--infoDescription">Descripcion</p>
        </div>
        <div className="ItemDetail--buttonsIteractions">
          <div className="countInteractions">
            <p className="count">numeros</p>
          </div>
          <div className="buttonsInteractions">
            <Count/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail