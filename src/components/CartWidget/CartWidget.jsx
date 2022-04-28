import React, { useContext } from 'react';
import Bag from '../../Assets/icons/bag32.png';
import { CartContext } from '../../Context/CartContext';
import '../../Styles/components/cartWidget/cartWidget.css';



const CartWidget = () => {

  const { total } = useContext(CartContext);

  return (
    <div className='container__cartWidget'>
      <img className='icon--cartWidget' src={Bag} alt="Icon Shopping Cart"/>
      <p className='counter--cartWidget'>{total}</p>
    </div>
  )
}

export default CartWidget