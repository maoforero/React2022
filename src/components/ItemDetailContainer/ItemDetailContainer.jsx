import React, { useEffect, useState } from "react";
import productos from "../../utils/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);



  let idItem = useParams();


  useEffect(() => {
    const db = getFirestore();
    const listProducts = collection(db, 'productos', idItem.id );
  
    getDocs(listProducts).then((res) => {
      const productoJunto = {id: res.id, ...res.data()}
  
      setProduct(productoJunto);
      // setProduct(res.filter((i) => i.id === idItem.id));
    });
  }, [])

  console.log(idItem)

  let itemId;
  let itemName;
  let itemPrice;
  let itemInfo;
  let itemImg;
  let itemStock;

  let validateProduct = (product) => {
    if(product.length !== 0){
      itemId = product[0].id;
      itemName = product[0].name;
      itemPrice = product[0].price;
      itemInfo = product[0].description;
      itemImg = product[0].image;
      itemStock = product[0].stock;
    }
  }

  validateProduct(product)

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
