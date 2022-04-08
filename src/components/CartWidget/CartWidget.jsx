import React from 'react';
import Cart from '../../Assets/shopping-cart64.png'
import '../CartWidget/cartWidget.css'


const CartWidget = () => {
  return (
    <div className='container__cartWidget'>
      <img className='icon--cartWidget' src={Cart}/>
    </div>
  )
}

export default CartWidget