import React, {FunctionComponent} from 'react';
import {PageComponent, HeaderComponentProps} from '../types/PageComponent';
import {animated} from 'react-spring';

const HeaderComponent: FunctionComponent<HeaderComponentProps> = ({contentStyle}) => {
    return (
        <animated.div style={contentStyle}>
            <h2>404!</h2>
            <p>This page could not be found!</p>
        </animated.div>
    );
};

const ContentComponent: FunctionComponent = () => null;

const NotFoundPage: PageComponent = {
    HeaderComponent,
    ContentComponent,
};

export default NotFoundPage;
