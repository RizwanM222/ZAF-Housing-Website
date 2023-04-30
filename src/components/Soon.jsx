import React from "react";
import { houses } from "../data";
import Property from "./UI/Property";

const Soon = () => {
  return (
    <section id="soon">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Coming <span className="green">Soon</span>!
          </h2>
          <div className="available__properties">
            {houses
                .filter(house => house.availability === 0)
                .slice(0, 2)
                .map((house) => (
              <Property house={house} key={house.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soon;
