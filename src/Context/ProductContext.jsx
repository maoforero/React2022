import React, { useState } from 'react'

export const ProductContext = React.createContext();

export const ProductProvider = ({children}) => {

  const prueba2 = {
    id: 12,
    name: 'Producto 12',
  }

  const [selectProduct, setSelectProduct] = useState([prueba2]);

  return (
    <ProductContext.Provider value={{
      selectProduct,
      setSelectProduct
    }}>
      { children }
    </ProductContext.Provider>
  )
}
