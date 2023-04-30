import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Feature from "./UI/Feature";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Featured = () => {
    return (
        <section id="featured">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Let's get you started
                    </h2>
                    <div className="featured__wrapper">
                        
                        <Feature 
                            icon= {<Link to="/discover" className="icon__links"><FontAwesomeIcon icon="home"/></Link>}
                            title = "Exploring homes?"
                            para = "Discover homes for rent today!"
                        />
                        <Feature 
                            icon= {<Link to="/login" className="icon__links"><FontAwesomeIcon icon="sign-in-alt"/></Link>}
                            title = "Existing Tenant?"
                            para = "Log in now!"
                        />
                        <Feature 
                            icon= {<Link to="/about" className="icon__links"><FontAwesomeIcon icon="question"/></Link>}
                            title = "What do we do?"
                            para = "Click here to learn more!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;