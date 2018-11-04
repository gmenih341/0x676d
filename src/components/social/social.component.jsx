import React from 'react';
import PropTypes from 'prop-types';
import * as css from './social.styles';

export function Social (props) {
    const {networks} = props;
    const icons = networks.map(network => (
        <a key={network.icon} href={network.href} className={css.icon(network.icon)} rel="noopener noreferrer" target="_blank">
            <span className="d-none d-sm-inline">{network.text}</span>
        </a>
    ));

    return (
        <footer className={css.footer}>
            <div className={css.socialIcons}>{icons}</div>
        </footer>
    );
}

Social.propTypes = {
    networks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
