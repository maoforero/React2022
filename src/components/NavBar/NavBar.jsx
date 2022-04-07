import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/navBar.css'

const navbar = () => {
  return (
      <nav className='container__navBar'>
          <ul className='container__navBar--list'>
            <li className="navBar--list">Home</li>
            <li className="navBar--list">Menu</li>
            <li className="navBar--list">News</li>
            <li className="navBar--list">Info</li>
          </ul>
          <CartWidget/>
      </nav>
  )
}

export default navbar

