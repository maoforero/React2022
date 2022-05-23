import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Footer  from '../../Pages/Footer';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let idItem = useParams();

  let idProduct = idItem.id;

  useEffect(() => {
    const db = getFirestore();
    const uniqueProduct = doc(db, 'productos', idProduct );

    getDoc(uniqueProduct).then((res) => {

      const l =  {id: res.id, ...res.data()};

      setProduct(l);

      // setProduct(res.filter((i) => i.id === idItem.id));
    });
  }, [])

  let itemId;
  let itemName;
  let itemPrice;
  let itemInfo;
  let itemImg;
  let itemStock;

  let validateProduct = (product) => {
    if(product.length !== 0){
      itemId = product.id;
      itemName = product.name;
      itemPrice = product.price;
      itemInfo = product.description;
      itemImg = product.image;
      itemStock = product.stock;
    }
  }

  validateProduct(product);

  return (
    <div>
      <ItemDetail
        key={itemId}
        id={itemId}
        name={itemName}
        price={itemPrice}
        info={itemInfo}
        img={itemImg}
        stock={itemStock}
      />
    </div>
  );
};

export default ItemDetailContainer;
