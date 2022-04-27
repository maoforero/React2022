import React from 'react';
import Bag from '../../Assets/icons/bag32.png';
import { useCartContext } from '../../Context/CartContext';
import '../../Styles/components/cartWidget/cartWidget.css';



const CartWidget = () => {

  const { countTotalCart } = useCartContext();

  return (
    <div className='container__cartWidget'>
      <img className='icon--cartWidget' src={Bag} alt="Icon Shopping Cart"/>
      <p className='counter--cartWidget'>{countTotalCart}</p>
    </div>
  )
}

export default CartWidget