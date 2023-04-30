import React from "react";
import Property from "./UI/Property";
import { houses } from '../data'

const Properties = () => {
    return (
        <section id="properties">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Houses <span className="green"> Available </span>
                        for Rent Now!
                    </h2>
                    <div className="available__properties">
                        {houses
                            .filter((house) => house.availability === 1)
                            .slice(0, 2)
                            .map((house) => ( 
                                <Property house={house} key={house.id}/>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Properties;