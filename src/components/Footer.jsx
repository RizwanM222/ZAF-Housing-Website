import React from "react";
import ZafLogo from '../assets/zaflogo.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {

    let contactOpen = false;

    function toggleContact() {

        if (contactOpen) {
          contactOpen = false;
          return document.body.classList.remove("contact--open");
        }
        contactOpen = true;
        document.body.classList += " contact--open";
    
    }
    
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={ZafLogo} alt="" className="footer__logo-img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/discover" className="footer__link">Discover</Link>
                        <Link to="/about" className="footer__link">About</Link>
                        <Link to="/faqs" className="footer__link">FAQs</Link>
                        <Link to="/" className="footer__link" onClick={toggleContact}>Contact</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2023 ZAF Housing
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;