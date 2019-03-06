import styled from '@emotion/styled-base';
import React, {FunctionComponent, ReactNode, useCallback, useState, useEffect} from 'react';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Logo} from '../logo/logo';
import {Menu} from '../menu/menu';
import {Terminal} from '../terminal/terminal';
import Router from 'next/router';

interface LayoutProps {
    children: ReactNode;
}

const LayoutContainer = styled('div')`
    display: grid;
    grid-template-rows: 85px 90px 1fr min-content;
    grid-template-columns: minmax(min-content, 120px) minmax(min-content, 300px) 1fr;
    grid-template-areas: 'logo header header' 'logo header header' 'terminal terminal terminal' 'footer footer footer';
    grid-row-gap: ${SPACER}px;
    grid-column-gap: ${SPACER_BIG}px;
    padding: ${SPACER}px 0;
    margin: 0 ${SPACER}px;
    box-sizing: border-box;
    font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
    position: relative;

    ${mediaMin(ScreenSize.SM)} {
        width: 570px;
        margin: 0 auto;
        grid-template-areas: 'logo header menu' 'logo header menu' 'terminal terminal terminal' 'footer footer footer';
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

export const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    const [active, setActive] = useState(false);
    const toggleMenu = useCallback(() => setActive(!active), [active]);
    useEffect(() => {
        const hideMenuOnRouteChange = () => setActive(false);
        Router.events.on('routeChangeComplete', hideMenuOnRouteChange);
        return () => Router.events.off('routeChangeComplete', hideMenuOnRouteChange);
    }, []);

    return (
        <LayoutContainer>
            <Logo />
            <Header />
            <Menu active={active} toggle={toggleMenu} />
            <Terminal>{children}</Terminal>
            <Footer />
        </LayoutContainer>
    );
};
