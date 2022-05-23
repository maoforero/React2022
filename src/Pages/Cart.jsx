import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../components/ItemCart/ItemCart';
import { CartContext } from '../Context/CartContext';

const Cart = () => {

  const { total } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { countTotal } = useContext(CartContext);

  return (
    <div className='container__pageCart'>
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
        <div className='container__buttonCart'>
          <button onClick={clearCart} className="buttonDeleteAll">Borrar todo</button>
          <button className='buttonBuyAll' disabled={countTotal <= 0}>
            <Link to={'/form'} className="buttonBuyAl--link" disabled={countTotal <= 0}>Comprar</Link>
          </button>
        </div>
    </div>
  ) 
}

export default Cart