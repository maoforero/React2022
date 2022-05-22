import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import '../../Styles/components/navBar/navBar.css'
import IconLogo from '../IconLogo/IconLogo';
import { NavLink } from 'react-router-dom';

const navbar = () => {
  return (
      <nav className='container__navBar'>
        <IconLogo/>
          <ul className='container__navBar--list'>
            <NavLink className="navBar--list" to="/">Home</NavLink>
            <NavLink className="navBar--list" to="/menu">Menu</NavLink>
            <NavLink className="navBar--list" to="/bebidas">Bebidas</NavLink>
            <NavLink className="navBar--list" to="/alimentos">Alimentos</NavLink>
          </ul>
          <NavLink className="container__pathCart" to="/cart">
            <CartWidget className="container__pathCart--widget"  />
          </NavLink>
      </nav>
  )
}

export default navbar

