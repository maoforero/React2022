import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function Test(){

  const [item, setitem] = useState({})

  useEffect(() => {
    const db = getFirestore();

    const ejemploRef = doc(db, 'productos', 'PpFCsALf4maQKKIOc5gB');
    
    getDoc(ejemploRef).then((res) => {
      console.log(res.data());

      const oJunto = {id: res.id, ...res.data()};

      setitem(oJunto);
      console.log(oJunto);
    });
  }, [])

  return (
    <div>{item.id ? <h1>{item.name}</h1> : 'Loading...'}</div>
  )
}
