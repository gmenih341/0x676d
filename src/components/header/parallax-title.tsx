import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {ParallaxLayer} from 'react-spring/addons';
import {COLOR_MAIN, SPACER_SMALL} from '../../style.contants';

const HeaderTitle = styled.h1`
    padding: 0;
    color: ${COLOR_MAIN[7]};
    font-size: 45px;
    font-weight: 600;
`;

const HeaderDescription = styled.span`
    margin: 0 ${SPACER_SMALL / 2}px;
    margin-top: 70px;
    color: ${COLOR_MAIN[8]};
    font-size: 16px;
    font-weight: 300;
`;

const ParallaxContainer = styled(ParallaxLayer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export interface IParallaxTitleProps {
    title: string;
    description: string;
    offset: number;
}

export const ParallaxTitle: FunctionComponent<IParallaxTitleProps> = React.memo(({title, description, offset}) => {
    return (
        <>
            <ParallaxContainer offset={offset} speed={0.8}>
                <HeaderTitle>{title}</HeaderTitle>
            </ParallaxContainer>
            <ParallaxContainer offset={offset} speed={0.5}>
                <HeaderDescription>{description}</HeaderDescription>
            </ParallaxContainer>
        </>
    );
});
