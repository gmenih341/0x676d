import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {COLOR_MAIN, SPACER_SMALL} from '../../style.contants';

const TitleContainer = styled('div')`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled('h1')`
    padding: 0;
    margin: 0;
    color: ${COLOR_MAIN[7]};
    font-size: 45px;
    font-weight: 600;
`;

const Description = styled('span')`
    color: ${COLOR_MAIN[8]};
    font-size: 16px;
    font-weight: 300;
    margin: -3px ${SPACER_SMALL}px;
`;

export interface IParallaxTitleProps {
    title: string;
    description: string;
}

export const HeaderTitle: FunctionComponent<IParallaxTitleProps> = React.memo(({title, description}) => {
    return (
        <TitleContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </TitleContainer>
    );
});
