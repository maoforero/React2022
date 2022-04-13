import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import productos from '../../utils/products';
import ItemList from '../ItemList/ItemList';
import '../../Styles/components/itemListContainer/itemListContainer.css';

function  ItemListContainer (){

  const [item, setItem] = useState([]);

  useEffect(() => {
    customFetch(1000, productos)
    .then(resultado => setItem(resultado))
    .catch(error => console.log(error));

  }, [item])

  return (
    <div className='container__bodyItems'>
      <h1 className='itemList--mainTitle'>STURBACKS</h1>
      <div className='container__itemList'>
        <ItemList productos={item} />
      </div>
    </div>
  )
}

export default ItemListContainer;