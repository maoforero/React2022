import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

import { collection, getDocs, getFirestore } from "firebase/firestore";

import '../../Styles/components/item/item.css'

const FilterCategory = (props) => {

  const [item, setItem] = useState([]);

  const prop = props;

  useEffect(() => {
    const db = getFirestore();

    const cartProduct = collection(db, 'productos');

    getDocs(cartProduct).then((res) => {
      let item = [...res.docs];
      
      item = item.map((i) => ({id: i.id, ...i.data()}));

      setItem(item.filter((e) => e.type === prop.type));
    });
  }, []);
  
  console.log(item)
  console.log(prop.type)

  return (
    item.map(i => (
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

export default FilterCategory