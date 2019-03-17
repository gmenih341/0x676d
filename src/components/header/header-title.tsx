import styled from 'styled-components/macro';
import React, {FunctionComponent, HTMLAttributes} from 'react';
import {animated} from 'react-spring';
import {COLOR_MAIN, SPACER_SMALL} from '../../style.contants';

const TitleContainer = styled(animated.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const Title = styled('h1')`
    margin: 0;
    padding: 0;
    color: ${COLOR_MAIN[7]};
    font-size: 45px;
    font-weight: 600;
`;

const Description = styled('span')`
    margin: -3px ${SPACER_SMALL}px;
    color: ${COLOR_MAIN[8]};
    font-size: 16px;
    font-weight: 300;
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
