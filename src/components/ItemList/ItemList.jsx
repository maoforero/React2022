import React from "react";
import Item from "../Item/Item";

function ItemList({ productos }) {
  return productos.map(item => {
    <Item 
    key={item.id} 
    name={item.name} 
    price={item.price} 
    img={item.image} 
    />;
  });
}

export default ItemList;
