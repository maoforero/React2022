import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import { useParams } from "react-router-dom";
import productos from '../../utils/products';
import Item from '../Item/Item';

import '../../Styles/components/item/item.css'

const FilterCategory = (props) => {

  const [item, setItem] = useState([]);

  const prop = props;

  useEffect(() => {
    customFetch(1000, productos)
    .then((res) => {
      setItem(res.filter((e) => e.type == prop.type))
    })
    .catch(error => console.log(error));
  },[]);

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