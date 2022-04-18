import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemCart from '../components/ItemCart/ItemCart';

const Cart = () => {

  const location = useLocation();
  const dataCount = location.state;
  console.log(dataCount);

  return (
    <div>
      <ItemCart count={"Prueba"}/>
    </div>
  )
}

export default Cart;