import styled from '@emotion/styled-base';
import Router from 'next/router';
import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {animated, useTransition} from 'react-spring';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Logo} from '../logo/logo';
import {Menu} from '../menu/menu';
import {Terminal} from '../terminal/terminal';

interface LayoutProps {
    children: typeof ReactNode;
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

export const Layout: FunctionComponent<LayoutProps> = ({children: RouteComponent}) => {
    const transition = useTransition(RouteComponent, item => item.displayName || 'none', {
        from: {opacity: 0, transform: 'translateY(-30px)'},
        enter: {opacity: 1, transform: 'translateY(0px)'},
        leave: {opacity: 0, transform: 'translateY(30px)', position: 'absolute'},
    });
    const [active, toggleMenu] = useMenu();
    return (
        <LayoutContainer onClick={() => toggleMenu(false)}>
            <Logo />
            <Header />
            <Menu active={active} toggle={toggleMenu} />
            <Terminal>
                {transition.map(({item: RouteComponent, props, key}) => (
                    <animated.div key={key} style={props}>
                        <RouteComponent />
                    </animated.div>
                ))}
            </Terminal>
            <Footer />
        </LayoutContainer>
    );
};

function useMenu(): [boolean, (force: boolean) => void] {
    const [active, setActive] = useState(false);
    const toggleMenu = useCallback((force: boolean) => setActive(force === undefined ? !active : force), [active]);
    useEffect(() => {
        const hideMenuOnRouteChange = () => setActive(false);
        Router.events.on('routeChangeComplete', hideMenuOnRouteChange);
        window.scrollTo(0, 0);
        return () => Router.events.off('routeChangeComplete', hideMenuOnRouteChange);
    }, []);
    return [active, toggleMenu];
}
