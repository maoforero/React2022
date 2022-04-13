import React, {useEffect, useState}from 'react';
import customFetch from '../../utils/customFetch';
import productos from '../../utils/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    customFetch(2000, productos)
    .then(result => setProduct(result))
    .catch(error => console.log(error));
  }, [])

  return (
    <div>
      <ItemDetail item={product}/>
    </div>
  )
}

export default ItemDetailContainer