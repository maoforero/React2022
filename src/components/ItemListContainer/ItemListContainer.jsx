import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import productos from '../../utils/products';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/itemListContainer.css';

function  ItemListContainer (){

  const [item, setItem] = useState([]);

  useEffect(() => {
    customFetch(1500, productos)
    .then(resultado => setItem(resultado))
    .catch(error => console.log(error));

  }, [item])

  return (
    <div className='container__bodyItems'>
      <h1>CURSO DE REACT CODERHOUSE</h1>
      <div className='container__itemList'>
        <ItemList productos={item} />
      </div>
    </div>
  )
}

export default ItemListContainer;