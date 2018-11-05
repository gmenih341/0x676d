import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styled/container.styled';
import {Description} from './styled/description.styled';
import {Title} from './styled/title.styled';

export function PageTitle (props) {
    const {active, title, description} = props;

    return (
        <Container>
            <Title>{title}</Title>
            <Description active={active}>{description}</Description>
        </Container>
    );
}

PageTitle.propTypes = {
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
