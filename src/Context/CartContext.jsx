import React, { useState, useEffect, useContext } from 'react';

export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0);

  const isInCart = (id) => {cart.some(item => item.id === id)}

  const clearCart = () => { setCart([])}

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id))

  const addToCart = (item, quantity) => {
    if(isInCart(item.id)){
      const newCart = cart.map(cartElement => {
        if(cartElement.id === item.id){
          return {...cartElement, quantity: cartElement.quantity + quantity}
        }else{
          return cartElement
        }
      })
      setCart(newCart)
    }else{
      setCart(prev => [...prev, {...item, quantity}] )
    }
  }

  const countTotalCart = (quantity) => {
    setTotal(prev => prev + quantity)

  }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      clearCart,
      removeItem,
      countTotalCart
    }}>
      { children }
    </CartContext.Provider>
  )
}