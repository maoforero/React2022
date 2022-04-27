import React from 'react';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../components/ItemCart/ItemCart';

const Cart = () => {

  const { cart, addToCart, clearCart, removeItem, countTotalCart } = useCartContext();

  return (
    <div className='containerCart'>
      {
        countTotalCart > 0 ? (
          <div className='cointainerCart__TrueProducts'>
            <div className="container__ListProducts">
        
          </div>
          <div className="container__TotalAmount">

          </div>
        </div>

        ) :
        <div className='cointainerCart__FalseProducts'>
          <h2>Carrito de Compras</h2>
          <p>No Existen productos Seleccionados</p>
        </div>
      }
    </div>
  )
}

export default Cart;