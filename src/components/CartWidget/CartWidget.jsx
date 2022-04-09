import React from 'react';
import Bag from '../../Assets/bag64.png'
import '../../Styles/components/cartWidget/cartWidget.css'


const CartWidget = () => {
  return (
    <div className='container__cartWidget'>
      <img className='icon--cartWidget' src={Bag}/>
    </div>
  )
}

export default CartWidget