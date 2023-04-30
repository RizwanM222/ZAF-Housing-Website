import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Price from "../components/UI/Price";
import Property from "../components/UI/Property";

const DiscoverInfo = ( { houses } ) => {
  const { id } = useParams();
  const house = houses.find((house) => +house.id === +id);

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
    <div id="discover__body">
      <main id="discover__main">
        <div className="discover__container">
          <div className="row">
            <div className="property__chosen--first">
              <Link to="/discover" className="discover__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/discover" className="discover__link">
                <h2 className="property__selected--title--top">All listings</h2>
              </Link>
            </div>
            <div className="property__selected">
              <figure className="property__selected--figure">
                <img
                  src={house.url}
                  alt=""
                  className="property__selected--img"
                />
              </figure>
              <div className="property__selected--description">
                <h2 className="property__selected--title">{house.title}</h2>
                <div className="property__selected--price">
                  <Price price={house.price} />
                </div>
                <div className="property__summary">
                  <div className="property__summary--title">
                    Property Description
                  </div>
                  <p className="property__summary--para">
                    This is an example of a property listing, we currently do not
                    have any available houses up for rent!
                    <br />
                    <br />
                    Bedrooms: XXX
                    <br />
                    Garden: YES/NO
                  </p>
                  <p className="property__summary--para">
                    This property is located in Wembley, London, (POSTCODE).
                    <br />
                    This street is a quiet street full of friendly neighbours.
                  </p>
                </div>
                <button className="btn btn__discover" onClick={toggleContact}>Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className="property__container">
          <div className="row">
            <div className="property__chosen--first">
              <h2 className="property__selected--title--top">Other listings</h2>
            </div>
            <div className="available__properties">
                {houses
                .filter((house) => house.availability === 1 && +house.id !== +id)
                .slice(0, 2)
                .map(house => <Property house={house} key={house.id} />
                )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiscoverInfo;
