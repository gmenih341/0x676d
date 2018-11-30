import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {COLOR_BLACK, SPACER, SPACER_SMALL, COLOR_GRAY} from '../../styles/variables';

const Wrapper = styled('div')`
    /* padding: ${SPACER_SMALL}px; */
    padding-top: ${SPACER}px;
    height: 100%;
`;

const Container = styled('div')`
    display: flex;
    flex-direction: ${props => props.direction};
    height: 100%;
    border: 1px solid ${props => props.color || COLOR_GRAY[6]};
    position: relative;
    padding: ${SPACER}px;
`;

const Title = styled('span')`
    display: inline-block;
    padding: 0;
    line-height: ${SPACER_SMALL}px;
    position: absolute;
    left: 0;
    top: -${SPACER_SMALL / 2}px;
    left: ${SPACER}px;
    background-color: ${COLOR_BLACK};
`;

export function ConsoleBox (props) {
    const {title, children, direction} = props;

    return (
        <Wrapper>
            <Container direction={direction || 'column'}>
                <Title>{title}</Title>
                {children}
            </Container>
        </Wrapper>
    );
}

ConsoleBox.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    direction: PropTypes.oneOf(['column', 'row']),
};
