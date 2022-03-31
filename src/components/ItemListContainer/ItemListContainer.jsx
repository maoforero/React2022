import React, { useState } from 'react';


export default function  ItemListContainer (){

  const [numeroCount, setNumero] = useState(0);

  function incrementoClick(){
    setNumero(numeroCount+1);
  }

  function decrementoClick(){
    setNumero(numeroCount--);
  }

  return (
    <div>
      <h1>CURSO DE REACT CODERHOUSE</h1>
      <p>{numeroCount}</p>
      <div>
        <button onClick={incrementoClick}>Incremento</button>
        <button onclick={decrementoClick}>Decremento</button>
      </div>
    </div>
  )
}
