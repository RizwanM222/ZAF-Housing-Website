import React from "react";

const Price = ( {price} ) => {
    return (
        <div className="property__price">
                £{price} / Month
        </div>
    );
}

export default Price;