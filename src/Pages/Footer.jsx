import React from 'react';
import '../Styles/components/footer/footer.css'

const footer = () => {
  return (
    <footer>
    <div class="cointer__footer__description">
        <div class="footer__description--logo">
            <img src="https://www.misiontic2022.gov.co/746/channels-645_logo_misiontic.png" alt="logo mision tic"/>
        </div>
        <div class="footer__description__info">
            <p>React project focused on the creation of a virtual store that mimics Starbucks. All its structure was developed during the React course at CoderHouse. </p>
        </div>
    </div>
    <div class="cointer__footer__team">
        <h6>Autor</h6>
        <a href="#" class="footer__team--profile">Forero Mauro</a>
    </div>
    <div class="cointer__footer__media">
        <h6>Social Media</h6>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Bitbucket</a>
    </div>
</footer>
  )
}

export default footer