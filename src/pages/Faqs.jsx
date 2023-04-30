import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Faqs = () => {

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
        
        <div id="faq__body">
            <div id="faq__main">
                <section>
                    <div className="faq__container">
                        <div className="row">

                            <h2 className="section__title faq__header--title">
                                FAQs
                            </h2>

                            <div className="faq__header">

                                <div className="faq__half">

                                    <div className="faq__popular">

                                        <h3 className="faq__heading">
                                            Popular FAQs
                                        </h3>

                                        <h3>How do I sign into ZAF Housing?</h3>
                                        <p class="faq__para">
                                            To <Link to="/login">login</Link> to this website, you must first be a tenant of ZAF Housing. If 
                                            you are a registered tenant of the company, an E-mail or text message would have been 
                                            sent to you with your login details. If you didn't recieve these details and are an 
                                            existing tenant, please contact us <Link to="/" onClick={toggleContact}>here</Link>.
                                        </p>

                                        <h3>How do I know my personal details are safe?</h3>
                                        <p class="faq__para">
                                            The details you have shared with the company are only able to be viewed by yourself and 
                                            the company. These details are stored on a secure database. The company uses these 
                                            details to see if rent has been paid and to contact you directly regarding any issues.
                                        </p>

                                        <h3>How do I become a tenant of ZAF Housing?</h3>
                                        <p class="faq__para">
                                            Properties that we have available are listed for selection in our 
                                            <Link to="/discover"> Discover</Link> section of this website. If a property interests you, click 
                                            the interested button to register your interest.
                                        </p>

                                        <h3>Why is the company not responding to me?</h3>
                                        <p class="faq__para">
                                            If you have registered interest in a property, or are an existing tenant and are in need
                                            of urgent help, and have not been given an immediate reponse then please wait 1-2 working
                                            days for one as we may be busy with multiple clients at once. If you are an existing 
                                            tenant, you are able to <Link to="/login">login</Link> to this website and directly contact staff
                                            for help.
                                        </p>

                                    </div>

                                </div>
                                    
                                <div class="faq__space"></div>

                                <div className="faq__otherhalf">

                                    <div class="faq__general">

                                        <h3 class="faq__heading">
                                            Tenant FAQs
                                        </h3>

                                        <h3>There is a major water leak in my home, what do I do?</h3>
                                        <p class="faq__para">
                                            There is a <a href="https://handymantameside.com/what-is-a-stopcock/" target="_blank">
                                            stopcock</a> located in every home, either under the stairs or under the sink in the 
                                            kitchen sink. Turn this stopcock clockwise to shut off the water supply in the home. Then 
                                            proceed to contact us immediately. If the water leak is happening during late night, after turning
                                            off all the water using the stopcock, contact us in the morning.
                                        </p>

                                        <h3>I am having electricity related problems, what should I do?</h3>
                                        <p class="faq__para">
                                            If the electricity in your home is malfunctioning, please do not attempt to fix this
                                            yourself due to hazards. <Link to="/" onClick={toggleContact}>Contact</Link> us and we will have an electrician sent
                                            over to resolve the issue.
                                        </p>

                                        <h3>My hot water is not working / boiler issues?</h3>
                                        <p class="faq__para">
                                            Boiler's are a very delicate item in every home and need to replaced every 15 years.
                                            If your boiler is not performing correctly it may need to be replaced. 
                                            Contact us through urgent contact in the account tab and we can resolve this issue for you.
                                        </p>

                                        <h3>I am not satisfied with an object inside of my home (e.g., fridge, washing machine etc.)</h3>
                                        <p class="faq__para">
                                            Important objects in every home have problems from time to time. Thanks to the ZAF Housing
                                            home supply we are able to replace any objects you have issues with. You are able to 
                                            urgent contact us (located in account page) for these types of matters.
                                        </p>

                                    </div>

                                </div>

                                    
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default Faqs;