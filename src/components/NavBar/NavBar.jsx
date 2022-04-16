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
            <NavLink className="navBar--list" to="">Cafe</NavLink>
            <NavLink className="navBar--list" to="">Antojos</NavLink>
            <NavLink className="navBar--list" to="*">More</NavLink>
          </ul>
          <CartWidget/>
      </nav>
  )
}

export default navbar

