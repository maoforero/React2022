import React from 'react';
import logo from '../../Assets/logo/starbucks32.png';
import '../../Styles/components/iconLogo/iconLogo.css'


const IconLogo = () => {
  return (
    <div className='container__iconLogo'>
      <img src={logo} alt="Main Icon" className='mainLogo' />
    </div>
  )
}

export default IconLogo