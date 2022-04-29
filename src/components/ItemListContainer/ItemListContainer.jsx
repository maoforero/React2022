import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/customFetch';
import productos from '../../utils/products';
import ItemList from '../ItemList/ItemList';
import '../../Styles/components/itemListContainer/itemListContainer.css';

import {collection, getDocs, getFirestore } from 'firebase/firestore';

function  ItemListContainer (){

  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const refProduct = collection(db, 'productos');

    getDocs(refProduct).then((res) => {
      let item = [...res.docs];

      item = item.map((i) => ({id: i.id, ...i.data()}));
      setItem(item);
    });
  }, [])

  return (
    <div className='container__bodyItems'>
      <h1 className='itemList--mainTitle'>STURBACKS</h1>
      <div className='container__itemList'>
        <ItemList productos={item} />
      </div>
    </div>
  )
}

export default ItemListContainer