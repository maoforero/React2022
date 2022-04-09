import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../../Styles/components/navBar/navBar.css'
import IconLogo from '../IconLogo/IconLogo';

const navbar = () => {
  return (
      <nav className='container__navBar'>
        <IconLogo/>
          <ul className='container__navBar--list'>
            <li className="navBar--list">Home</li>
            <li className="navBar--list">Menu</li>
            <li className="navBar--list">Café</li>
            <li className="navBar--list">Antojos</li>
          </ul>
          <CartWidget/>
      </nav>
  )
}

export default navbar

