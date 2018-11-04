import React from 'react';
import {cx} from 'emotion';
import PropTypes from 'prop-types';
import * as css from './page-title.styles';

export function PageTitle (props) {
    const {active, title, description} = props;

    return (
        <div className={cx({[css.pageTitle]: true, [css.active]: active})}>
            <h1 className={css.title}>{title}</h1>
            <span className={css.description}>{description}</span>
        </div>
    );
}

PageTitle.propTypes = {
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
