import {css, Global} from '@emotion/core';
import styled from '@emotion/styled';
import React, {Suspense} from 'react';
import networks from '../assets/networks.json5';
import {PageContextProvider} from '../context/page.context';
import {COLOR_WHITE, SPACER} from '../style.contants';
import {mediaMin, ScreenSize} from '../utils/style.utils';
import {Logo} from './logo/logo';

const globalStyle = css`
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        position: relative;
        overflow: hidden;
    }
    #root {
        background-color: ${COLOR_WHITE};
    }
`;

const AppContainer = styled.div`
    display: grid;
    position: relative;
    height: 100%;
    grid-template-rows: 85px 85px 1fr 50px;
    grid-template-columns: 150px 70px 1fr 70px;
    grid-gap: ${SPACER}px;
    padding: ${SPACER}px 0;
    margin: 0 ${SPACER}px;
    box-sizing: border-box;
    font-family: Fira Sans, Arial, Helvetica, sans-serif;

    ${mediaMin(ScreenSize.SM)} {
        width: 570px;
        margin: 0 auto;
    }

    ${mediaMin(ScreenSize.MD)} {
        width: 760px;
    }

    ${mediaMin(ScreenSize.LG)} {
        width: 980px;
    }

    ${mediaMin(ScreenSize.XL)} {
        width: 80vw;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-column: 1 / -1;
    grid-row: 1 / 2;

    ${mediaMin(ScreenSize.SM)} {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }
`;

const Header = React.lazy(() => import('./header/header'));
const PageIndicator = React.lazy(() => import('./page-indicator/page-indicator'));
const SocialIcons = React.lazy(() => import('./social-icons/social-icons'));
const Terminal = React.lazy(() => import('./terminal/terminal'));

export function App () {
    return (
        <AppContainer>
            <Global styles={globalStyle} />
            <Suspense fallback={'null'}>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <PageContextProvider>
                    <PageIndicator />
                    <Header />
                    <Terminal />
                </PageContextProvider>
                <SocialIcons networks={networks} />
            </Suspense>
        </AppContainer>
    );
}
