import React from 'react';
import {SideImage} from '../components/SideImage';
import {PageComponent} from '../types/PageComponent';

const ErrorPage: PageComponent = () => <h1>Whoops!</h1>;

ErrorPage.displayName = 'home';
ErrorPage.index = 404;
ErrorPage.headerComponent = ({style, contentStyle, imageStyle}) => {
    return <SideImage contentStyle={contentStyle} imageStyle={imageStyle} imageSrc={''}></SideImage>;
};

export default ErrorPage;
