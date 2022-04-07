import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import productos from '../../utils/products';
import ItemList from '../ItemList/ItemList';

function  ItemListContainer (){

  const [item, setItem] = useState([]);

  useEffect(() => {
    customFetch(1500, productos)
    .then(resultado => setItem(resultado))
    .catch(error => console.log(error));

  }, [item])

  return (
    <div>
      <h1>CURSO DE REACT CODERHOUSE</h1>
      <ItemList productos={item} />
    </div>
  )
}

export default ItemListContainer;