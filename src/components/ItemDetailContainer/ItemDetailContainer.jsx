import React, {useEffect, useState}from 'react';
import productos from '../../utils/products'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link, useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  
  let { id } = useParams();
  let int__id = parseInt(id);

  const filterList = productos.map(function(item){
    if(int__id === item.id){
      setProduct(item);
    }
  });
  
  return (
    <div>
      <Link to={{pathname:'/menu:id'}}/>
      <ItemDetail itemSelec={product}/>
    </div>
  )
}

export default ItemDetailContainer