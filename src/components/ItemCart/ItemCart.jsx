import React, {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';

import '../../Styles/components/ItemCart/ItemCart.css';

const ItemCart = ({id, name, price, quantity}) => {

  const { removeItem } = useContext(CartContext);
  const { deleteQuantity } = useContext(CartContext);

  const convertionPriceToNumber = (price) => {
    let numberPrice = parseFloat(price.replace(/[^0-9.-]+/g,""));
    return numberPrice;
  }

  const totalPriceItem = convertionPriceToNumber(price) * quantity;

  return(
      <div key={id} className='container__ItemCart'>
        <div className="container__ItemCart--title">
          <h4>Productos</h4>
          <div className="container__ItemCart--titleItem">
            <h6 className='itemCart--title'>{name}</h6>
          </div>
        </div>

        <div className="container__ItemCart--price">
          <h4>Precio</h4>
          <div className='container__ItemCart--priceItem'>
            <p className='itemCart--price'>{totalPriceItem}</p>
          </div>
        </div>

        <div className="container__ItemCart--quantity">
          <h4>Cantidad</h4>
          <div className='container__ItemCart--quantityItem'>
            <p className='itemCart--quantity'>Cantidad Elementos: {quantity}</p>
          </div>
        </div>
        
        <button className='itemCart--deleteItem' onClick={() => 
          {
            removeItem(id);
            deleteQuantity(quantity)
          }}>Delete</button>
      </div>
  )
}

export default ItemCart;

