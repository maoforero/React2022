import React, { useContext } from 'react';
import ItemCart from '../components/ItemCart/ItemCart';
import { CartContext } from '../Context/CartContext';

const Cart = () => {

  const { total } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);


  return (
    <div>
      <h1>Carrito</h1>        
    {
      total <= 0 ?
      <h2>No hay productos en el carrito</h2> : 
      
      cart.map(item => (
        <ItemCart
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))
    }
        <div>
          <button onClick={clearCart}>Delete All</button>
        </div>
    </div>
  ) 
}

export default Cart