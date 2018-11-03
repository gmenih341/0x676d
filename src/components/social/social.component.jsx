import React from 'react';
import PropTypes from 'prop-types';

import './social.component.scss';

export function Social (props) {
    const {networks} = props;
    const icons = networks.map(network => (
        <a key={network.icon} href={network.href} className={`icon ${network.icon}`} rel="noopener noreferrer" target="_blank">
            <span className="d-none d-sm-inline">{network.text}</span>
        </a>
    ));

    return (
        <footer className="container-fluid footer">
            <div className="d-flex justify-content-center">
                <div className="social-icons">{icons}</div>
            </div>
        </footer>
    );
}

Social.propTypes = {
    networks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
