import React from 'react';
import PropTypes from  'prop-types';

const Address = (props) => {
    return (
        {props.showIcon &&
        <img className={props.iconClassName}
        src="/images/icons/map_marker.svg" /> 
        }
        <address>
            <div>
                <span itemProp="streetAddress">{props.location}</span>
            </div>
            <div>
                <span itemProp="addressLocality">
                    {props.location.city},
                </span>
                <span itemProp="addressRegion">
                    {props.location.zipCode}
                </span>
            </div>
        </address>
    );
}