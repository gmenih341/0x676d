import {css, Global} from '@emotion/core';
import styled from '@emotion/styled';
import React, {Suspense} from 'react';
import {animated} from 'react-spring/hooks';
import networks from '../assets/networks.json5';
import {PageContextProvider} from '../context/page.context';
import {COLOR_WHITE, SPACER} from '../style.contants';
import {mediaMin} from '../utils/style.utils';
import {TransitionAnimation} from './animations/transition.animation';
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

    ${mediaMin('sm')} {
        width: 570px;
        margin: 0 auto;
    }

    ${mediaMin('md')} {
        width: 760px;
    }

    ${mediaMin('lg')} {
        width: 980px;
    }

    ${mediaMin('xl')} {
        width: 80vw;
    }
`;

const LogoContainer = styled(animated.div)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-column: 1 / -1;
    grid-row: 1 / 2;

    ${mediaMin('sm')} {
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
                <TransitionAnimation
                    Component={LogoContainer}
                    from={{opacity: 0, transform: 'translateX(-10px)'}}
                    to={{opacity: 1, transform: 'translateY(0)'}}>
                    <Logo />
                </TransitionAnimation>
                <PageContextProvider>
                    <TransitionAnimation
                        Component={PageIndicator}
                        from={{opacity: 0, transform: 'translateY(-10px)'}}
                        to={{opacity: 1, transform: 'translateY(0)'}}
                    />
                    <TransitionAnimation
                        Component={Header}
                        from={{opacity: 0, transform: 'translateX(25px)'}}
                        to={{opacity: 1, transform: 'translateX(0)'}}
                    />
                    <TransitionAnimation
                        Component={Terminal}
                        from={{opacity: 0, transform: 'translateY(50px)'}}
                        to={{opacity: 1, transform: 'translateY(0)'}}
                    />
                </PageContextProvider>
                <TransitionAnimation
                    Component={SocialIcons}
                    networks={networks}
                    from={{opacity: 0, transform: 'translateY(25px)'}}
                    to={{opacity: 1, transform: 'translateY(0)'}}
                />
            </Suspense>
        </AppContainer>
    );
}
