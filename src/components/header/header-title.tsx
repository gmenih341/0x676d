import React, {FunctionComponent} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_SANS, SPACER_SMALL} from '../../style.contants';
import {useFadeInOut} from '../../hooks/useFadeInOut';
import {mediaMin} from '../../utils/style.utils';

export interface HeaderTitleProps {
    title: string;
    description: string;
}

export const HeaderTitle: FunctionComponent<HeaderTitleProps> = React.memo(({title, description}) => {
    const titleTransition = useFadeInOut(title, null, 15);
    const descriptionTransition = useFadeInOut(description, null, 5);

    return (
        <>
            <Title>
                {titleTransition.map(({item, key, props}) => (
                    <animated.div key={key} style={props}>
                        {item}
                    </animated.div>
                ))}
            </Title>
            <Description>
                {descriptionTransition.map(({item, key, props}) => (
                    <animated.div key={key} style={props}>
                        {item}
                    </animated.div>
                ))}
            </Description>
        </>
    );
});

const Title = styled('h1')`
    margin: 0;
    padding: 0;
    color: ${COLOR_MAIN[7]};
    font-family: ${FONT_SANS};
    font-size: 35px;
    font-weight: 600;

    ${mediaMin('md')} {
        font-size: 45px;
    }
`;

const Description = styled('span')`
    display: block;
    margin-left: ${SPACER_SMALL}px;
    font-family: ${FONT_SANS};
    font-size: 14px;
    font-weight: 300;
    text-transform: lowercase;
`;
