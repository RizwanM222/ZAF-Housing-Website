import React from 'react';
import LandingImage from '../assets/undraw_best_place.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Landing = () => {

    return (

        <section id="landing"> 

            <header>
                <div className="header__container">
                     <div className="header__description">
                        <h1>
                            Discover the Best Properties in London with 
                            <span className="green"> ZAF Housing </span>
                        </h1>
                        <Link to="/discover">
                            <button className="btn">
                                Browse Homes
                            </button>
                        </Link>
                     </div>
                     <figure className="header__img--wrapper">
                        <img src={ LandingImage } alt="" />
                     </figure>
                </div>
            </header>

        </section>
        
    );
}

export default Landing