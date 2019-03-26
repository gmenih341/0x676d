import React, {FunctionComponent, HTMLAttributes} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_SANS, SPACER_SMALL} from '../../style.contants';

const TitleContainer = styled(animated.div)`
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

export interface HeaderTitleProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

export const HeaderTitle: FunctionComponent<HeaderTitleProps> = React.memo(({title, description, ...props}) => {
    return (
        <TitleContainer {...props}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </TitleContainer>
    );
});
