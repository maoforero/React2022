import React from 'react';
import bannerCoffe  from '../Assets/banner/bannerCoffe.jpg';

import '../Styles/components/home/home.css';

const Home = () => {
  return (
    <div className='mainContainer__Home'>
      <div className="home__mainBanner">
        <img src={bannerCoffe} alt="" />
      </div>
    </div>
  )
}

export default Home;