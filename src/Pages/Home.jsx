import React from 'react';
import bannerCoffe  from '../Assets/banner/bannerCoffe.jpg';
import { Link } from 'react-router-dom';

import '../Styles/components/home/home.css';

const Home = () => {
  return (
    <div className='mainContainer__Home'>
        {/* <img className='home__mainBanner--img' src={bannerCoffe} alt="banner de tazas de cafe" /> */}
        <div className='home__mainBanner--title'>
          <h1 className='mainBanner--title'>¡ESCOGE TU ANTOJO!</h1>
          <p className='mainBanner--info'>Tus nuevos Cookies & Cream Frappuccino están aquí</p>
        <div className="home__mainBanner--buttonMore">
          <Link to={"/menu"}>
            <p className='buttonMore'>Escoge tu favorito y disfrútalo</p>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Home;