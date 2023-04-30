import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Price from "./Price";

const Property = ({ house }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = house.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  })

  return (
    <div className="property">
      {img ? (
        <>
          <Link to={`/discover/${house.id}`}>
            <figure className="property__img--wrapper">
              <img src={house.url} alt="" className="property__img" />
            </figure>
          </Link>

          <div className="property__name">
            <Link to={`/discover/${house.id}`} className="property__name--link">
              {house.title}
            </Link>
          </div>

          <Price price={house.price} />
        </>
      ) : (
        <>
          <div className="property__img--loadstate"></div>
          <div className="loadstate property__title--loadstate"></div>
          <div className="loadstate property__price--loadstate"></div>
        </>
      )}
    </div>
  );
};

export default Property;
