import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function UrgentContact( {closeUrgent} ) {
    return(

        <div className="urgent__modal">
            <div className="urgent__container">
                <FontAwesomeIcon
                    icon="times"
                    className="urgent__contact--exit click"
                    onClick={() => closeUrgent(false)}
                />
                <div className="urgent__title">
                    Urgent Contact
                </div>
                <div className="urgent__subtitle">
                    <p>
                        Contact us for an emergency.
                    </p>
                </div>
                <div className="urgent__body">
                    <p>
                        We do not tolerate calls that aren't of priority as listed below.
                        <br />
                        <br />
                        Contact Number #1 is for <span className="critical">Critical</span> seriousness.
                        An example would be a danger that needs to be resolved immediatelty 
                        (fires, electrical hazards, water leaks, etc.).
                        <br />
                        <br />
                        Contact Number #2 is for <span className="significant">Significant</span> seriousness.
                        An example would include: a significant item in the house has stopped functioning (such as fridge,
                        washing machines that have stopped working).
                        
                        <div className="urgentcontact__number">
                            Contact Number #1: 0000000
                            <br />
                            Contact Number #2: 0000000  
                        </div>
                       
                    </p>
                </div>
            </div>
        </div>

    );
}

export default UrgentContact;