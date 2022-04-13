import React, {useEffect, useState}from 'react';
import productos from '../../utils/products'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link, useParams } from 'react-router-dom';
import customFetch from '../../utils/customFetch';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  let { idItem } = useParams();
  
  useEffect(() => {
    customFetch(1000, productos)
      .then(res => setProduct(res.find(i => i.id === idItem)));
  })


  return (
    <div>
        <ItemDetail key={product.id} itemSelect={product}/>
    </div>
  )
}

export default ItemDetailContainer