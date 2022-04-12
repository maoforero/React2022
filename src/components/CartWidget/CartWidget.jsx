import React from 'react';
import Bag from '../../Assets/icons/bag32.png'
import '../../Styles/components/cartWidget/cartWidget.css';


const CartWidget = () => {
  return (
    <div className='container__cartWidget'>
      <img className='icon--cartWidget' src={Bag}/>
    </div>
  )
}

export default CartWidget