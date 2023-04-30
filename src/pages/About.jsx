import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const About = () => {

    return (

        <div id="about__body">
            <div id="about__main">
                <section>
                    <div className="about__container">
                        <div className="row">
                            <div className="about__header">

                                <h2 className="section__title about__header--title">
                                    About
                                </h2>

                                <p className="about__header--para">
                                    Located in London, <Link to="/">
                                    <span class="green"> ZAF Housing </span></Link> 
                                    is a housing organisation. The company's headquarters are 
                                    in Wembley, London, and was founded in 1995. Our major 
                                    objective is to offer dependable, high-quality accommodation 
                                    for rent at the most affordable rates.
                                </p>

                                <p className="about__header--para">
                                    We were able to reach a broader audience thanks to our company's
                                    reputation for offering top-notch properties and top-notch 
                                    customer service, so we decided to develop a more simplified 
                                    and effective procedure for those looking for a new home.  
                                </p>

                                <p class="about__header--para">
                                    Our new housing website aims to provide consumers an easy 
                                    platform with a number of features that will make it simple 
                                    for them to search for, evaluate, and choose the ideal house. 
                                    If you are a first-time renter, we are convinced that our 
                                    housing website will assist you in locating the ideal house
                                    that satisfies your requirements and beyond your expectations.
                                </p>

                                <p class="about__header--para">
                                    Tenants may now quickly access their accounts and examine their 
                                    current rent amount and payment history thanks to the 
                                    introduction of this website. This enables them to keep 
                                    track of their payments and ensure they are up to date. 
                                    Tenants may now also directly contact the company through the 
                                    website for any issues they may be facing.
                                </p>
                                
                                <p class="about__header--para">
                                    Have fun on your journey with 
                                    <span class="green"> ZAF Housing</span>!
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );

}

export default About;