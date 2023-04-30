import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ZafLogo from '../assets/zaflogo.png';
import { Link } from "react-router-dom";
import Login from "./Login";
import { auth } from "../firebase/init";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AuthDetails from "./AuthDetails";


const Nav = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
            return() => {
                listen();
            } 
    }, []);

    /* OPENING MENU ON PHONE */

    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    /* OPENING MENU ON PHONE */

    /* PRESS MAIL BUTTON/CONTACT BUTTON */

    let contactOpen = false;

    function toggleContact() {

        if (contactOpen) {
          contactOpen = false;
          return document.body.classList.remove("contact--open");
        }
        contactOpen = true;
        document.body.classList += " contact--open";
    
    }

    /* PRESS MAIL BUTTON/CONTACT BUTTON */

    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={ZafLogo} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/discover" className="nav__link">
                            Discover
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/about" className="nav__link">
                            About
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/faqs" className="nav__link">
                            FAQs
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/" className="nav__link" onClick={toggleContact}>
                            Contact
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>

                    {/* <li className="nav__list">
                        <Link to="/login" className="nav__link nav__link--primary" >
                            Login
                        </Link>
                    </li> */}

                        {
                            authUser ? <li className="nav__list">
                                        <Link to="/account" className="nav__link nav__link--primary" >
                                            Account
                                        </Link>
                                    </li>
                            :
                            <>
                            <li className="nav__list">
                                <Link to="/login" className="nav__link nav__link--primary" >
                                    Login
                                </Link>
                            </li>
                            </>
                        }

                </ul>

                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/discover" className="menu__link" onClick={closeMenu}>
                                Discover
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/about" className="menu__link" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/faqs" className="menu__link" onClick={closeMenu}>
                                FAQs
                            </Link>
                        </li>

                        {
                            authUser ? <li className="menu__list">
                                        <Link to="/account" className="menu__link" onClick={closeMenu}>
                                            Account
                                        </Link>
                                    </li>
                            :
                            <>
                            <li className="menu__list">
                                <Link to="/login" className="menu__link" onClick={closeMenu}>
                                    Login
                                </Link>
                            </li>
                            </>
                        }

                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;