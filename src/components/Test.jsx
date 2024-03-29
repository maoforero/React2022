import React, { useEffect, useState, useContext } from 'react';
import { addDoc, collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext';

export default function Test(){

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cellphone, setCellphone] = useState();
  const [buy, setBuy] = useState({});

  const { cart, total } = useContext(CartContext);

  const db = getFirestore();

  const ordersRef = query(collection(db, 'orders'));

  function validarDataCompra(){
    let stateName =
      name !== undefined ? (name.length > 0 ? true : false) : false;
    
    let stateEmail =
      email !== undefined ? (email.length > 0 ? true : false) : false;

    let stateCellphone =
      cellphone !== undefined ? (cellphone.length > 0 ? true : false) : false;

    if(stateName === true  && stateEmail === true && stateCellphone === true){
      return true;
    }else{
      return false;
    }
  }

  function validateDateTime(){
    let date = new Date();
    let str_localTime = date.toLocaleString();
    let str_utcTime = date.toUTCString();
    let [day, month, year] = [date.getDay(), date.getMonth(), date.getFullYear()];

    return {str_localTime, str_utcTime, day, month, year}
  }

  function terminarCompra(){
    let statusData = validarDataCompra();

    if(statusData === true){
      let {str_localTime, str_utcTime, day, month, year} = validateDateTime();
      let data = {
        buyer:{
          name,
          email,
          cellphone
        },
        date:{
          str_localTime,
          str_utcTime,
          day,
          month,
          year
        },
        cart,
        total
      }
      console.log('compra Exitosa');
      console.log(data)
      setBuy(data);

      setTimeout(() => {
        addDoc(ordersRef, buy).then(({ id }) =>{
          alert('Compra Exitosa ' + id);
        });
      } , 1000);

    }else{
      console.log('Datos Incompletos');
    }
  }


  return (
    <div>
      <input 
        type={'text'}
        value={name}
        onChange={
          (e) => setName(e.target.value)
        }
      />
      <input
        type={'text'} 
        value={email}
        onChange={
          (e) => setEmail(e.target.value)
        }
      />
      <input
      type={'number'}
      value={cellphone}
      onChange={
        (e) => setCellphone(e.target.value)
      }
      />

      <button onClick={() => terminarCompra()}>Comprar</button>
    </div>
  )
}
