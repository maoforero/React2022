import React, { useEffect, useState } from "react";
import productos from "../../utils/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import customFetch from "../../utils/customFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  let idItem = useParams();

  useEffect(() => {
    customFetch(1000, productos).then((res) =>
      setProduct(res.filter((i) => i.id === idItem.id))
    );
  },[]);

  let itemId;
  let itemName;
  let itemPrice;
  let itemInfo;
  let itemImg;

  let validateProduct = (product) => {
    if(product.length !== 0){
      itemId = product[0].id;
      itemName = product[0].name;
      itemPrice = product[0].price;
      itemInfo = product[0].description;
      itemImg = product[0].image;   
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
      />
    </div>
  );
};

export default ItemDetailContainer;
