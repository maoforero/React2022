import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { ProductContext } from '../../Context/ProductContext';

const ItemCart = () => {
  let listProducts = [];

  const [listCart, setListCart] = useState([listProducts]);

  const { cart } = useContext(CartContext);

  function filterListProducts(cart){

    const filter = listCart.filter(i => i === cart[2]);

    !filter ? cart.push(listProducts) : console.log('El Producto ya existe en el carrito');
  }

  console.log(cart);

  return(
    <div>
      <h2>Carrito</h2>
      <h4>Producto: {cart[2]}</h4>
      <p>Precio: {cart[3]}</p>
      <p> Cantidad:
        {cart[0]}
      </p>
    </div>
  )
}

export default ItemCart;

