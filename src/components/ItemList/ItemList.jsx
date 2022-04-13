import React from "react";
import Item from "../Item/Item";

function ItemList({ productos }) {
    return (
      productos.map(i => (
        <Item 
        key={i.id} 
        id={i.id}
        name={i.name} 
        price={i.price} 
        image={i.image} 
        />
    ))
  )
}

export default ItemList;