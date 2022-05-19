import React from 'react';
import imgNotfound from '../Assets/notFound/404.png';

const NotFound = () => {
  return (
    <div className='contianer__notFound'>
      <h1 className='notFound--title'>Ups! Es posible que la página que estás buscando no exista o haya sido eliminada</h1>
      <div className='notFound--img'>
        <img src={imgNotfound} alt="error 404 No encontrado" />
      </div>
    </div>
  )
}

export default NotFound