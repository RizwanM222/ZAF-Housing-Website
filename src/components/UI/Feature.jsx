import React from "react";

const Feature = ({ title, icon, para }) => {
    return (
        <div className="feature">
            <h3 className="feature__title">
                {title}
            </h3>
            
            <div className="feature__img">
                {icon}
            </div>

            <p className="feature__para">
                {para}
            </p>
        </div>
    );
}

export default Feature