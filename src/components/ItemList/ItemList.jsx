import React from "react";
import Item from "../Item/Item";

function ItemList({ productos }) {
    return (
      productos.map(i => (
        <Item 
        key={i.id} 
        name={i.name} 
        price={i.price} 
        img={i.image} 
        />
    ))
  )
}

export default ItemList;