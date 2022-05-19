import React from 'react';
import imgNotfound from '../Assets/notFound/404.png';

import '../Styles/components/notFound/notFound.css';

const NotFound = () => {
  return (
    <div className='container__notFound'>
      <div className='container__notFound--img'>
        <img src={imgNotfound} alt="error 404 No encontrado" className='notFound--img'/>
      </div>
      <h1 className='notFound--title'>Ups! Es posible que la página que estás buscando no exista o haya sido eliminada</h1>
    </div>
  )
}

export default NotFound