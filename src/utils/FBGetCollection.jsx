import React, {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function FBGetCollection (){

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const refProducts = collection(db, 'productos' );

    getDocs(refProducts).then((res) => {

      let productos = [...res.docs];

      productos = productos.map((item) => ({id: item.id, ...item.data()}));

      console.log(productos);
      setProductos(productos);

    });
  }, [])


  return (
    <>
    {
      productos.length ? (
        <div>
          {JSON.stringify(productos)}
        </div>
      ): (
        'Loading...'
      )
    }
    </>
  )
}
