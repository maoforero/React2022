import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemCart from '../components/ItemCart/ItemCart';

const Cart = () => {

  return (
    <div>
      <h1>CARRITO</h1>
      <p>Cantidad elementos:</p>
      <ItemCart/>
    </div>
  )
}

export default Cart;