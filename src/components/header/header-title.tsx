import React, {FunctionComponent, HTMLAttributes} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_SANS, SPACER_SMALL} from '../../style.contants';

export interface HeaderTitleProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

const HeaderTitleComponent: FunctionComponent<HeaderTitleProps> = React.memo(({title, description, ...props}) => {
    return (
        <animated.div {...props}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </animated.div>
    );
});

export const HeaderTitle = styled(HeaderTitleComponent)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
`;

const Title = styled('h1')`
    margin: 0;
    padding: 0;
    color: ${COLOR_MAIN[7]};
    font-family: ${FONT_SANS};
    font-size: 45px;
    font-weight: 600;
`;

const Description = styled('span')`
    display: block;
    margin-left: ${SPACER_SMALL}px;
    font-family: ${FONT_SANS};
    font-size: 14px;
    font-weight: 300;
    text-transform: lowercase;
`;
