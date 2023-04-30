import React, { useState } from "react";
import Property from "../components/UI/Property";

const Discover = ({ houses: initialHouses }) => {
  const [houses, setHouses] = useState(initialHouses);

  function filterHouses(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      setHouses(houses.slice().sort((a, b) => a.price - b.price));
    }
    if (filter === "HIGH_TO_LOW") {
      setHouses(houses.slice().sort((a, b) => b.price - a.price));
    }
  }

  return (
    <div id="discover__body">
      <main id="discover__main">
        <section>
          <div className="discover__container">
            <div className="row">
              <div className="discover__header">
                <h2 className="section__title discover__header--title">
                  All listings
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterHouses(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Pricing: Low To High</option>
                  <option value="HIGH_TO_LOW">Pricing: High To Low</option>
                </select>
              </div>
              <div className="available__properties">
                {houses
                  .filter((house) => house.availability === 1)
                  .map((house) => (
                    <Property house={house} key={house.id} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Discover;
