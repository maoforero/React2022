import React from 'react';
import logo256 from '../Assets/logo/starbucks256.png'
import '../Styles/components/footer/footer.css'

const Footer = () => {
  return (
    <footer className='container__footer'>
    <div className="cointer__footer__description">
        <div className="footer__description__info">
            <p>React project focused on the creation of a virtual store that mimics Starbucks. All its structure was developed during the React course at CoderHouse. </p>
        </div>
    </div>
    <div className="cointer__footer__team">
        <h6>Autor</h6>
        <a href="#" className="footer__team--profile">Forero Mauro</a>
    </div>
    <div className="cointer__footer__media">
        <h6>Social Media</h6>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="https://github.com/maoforero">Github</a>
    </div>
</footer>
  )
}

export default Footer