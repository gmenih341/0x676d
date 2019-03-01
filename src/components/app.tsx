import {css, Global} from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import networks from '../assets/networks.json5';
import {PageContextProvider} from '../context/page.context';
import {COLOR_WHITE, SPACER} from '../style.contants';
import {mediaMin, ScreenSize} from '../utils/style.utils';
import Header from './header/header';
import {Logo} from './logo/logo';
import PageIndicator from './page-indicator/page-indicator';
import SocialIcons from './social-icons/social-icons';
import Terminal from './terminal/terminal';

const globalStyle = css`
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        position: relative;
    }
    #root {
        background-color: ${COLOR_WHITE};
    }
`;

const AppContainer = styled.div`
    display: grid;
    position: relative;
    height: auto;
    grid-template-rows: 85px 90px 1fr min-content;
    grid-template-columns: 150px 70px 1fr 70px;
    grid-template-areas: 'logo logo logo logo' 'header header header header' 'terminal terminal terminal terminal' 'footer footer footer footer';
    grid-gap: ${SPACER}px;
    padding: ${SPACER}px 0;
    margin: 0 ${SPACER}px;
    box-sizing: border-box;
    font-family: Fira Sans, Arial, Helvetica, sans-serif;

    ${mediaMin(ScreenSize.SM)} {
        width: 570px;
        margin: 0 auto;
        grid-template-areas: 'logo indicator header header' 'logo indicator header header' 'terminal terminal terminal terminal' 'footer footer footer footer';
    }

    ${mediaMin(ScreenSize.MD)} {
        width: 760px;
    }

    ${mediaMin(ScreenSize.LG)} {
        width: 980px;
    }

    ${mediaMin(ScreenSize.XL)} {
        width: 1140px;
    }
`;

export function App() {
    return (
        <PageContextProvider>
            <AppContainer>
                <Global styles={globalStyle} />
                <Logo />
                <PageIndicator />
                <Header />
                <Terminal />
                <SocialIcons />
            </AppContainer>
        </PageContextProvider>
    );
}
