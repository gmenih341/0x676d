import React from 'react';
import PropTypes from 'prop-types';

import './page-title.component.scss';

export function PageTitle (props) {
    const {active, title, description} = props;

    return (
        <div className={'page-title' + (active ? ' active' : '')}>
            <h1>{title}</h1>
            <span className="description">{description}</span>
        </div>
    );
}

PageTitle.propTypes = {
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
