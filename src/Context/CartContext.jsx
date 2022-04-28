import React, { useState, createContext,  useEffect, useContext } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0);

  const isInCart = (id) => {cart.some(item => item.id === id)}

  const clearCart = () => { setCart([]);setTotal(0) }

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id))
  const deleteQuantity = (count) => {setTotal(total - count)}

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

  const countTotal = (count) => setTotal(total + count)

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      isInCart,
      clearCart,
      removeItem,
      addToCart,
      total,
      setTotal,
      countTotal,
      deleteQuantity
    }}>
      { children }
    </CartContext.Provider>
  )
}