import React, {FunctionComponent} from 'react';
import {animated, useTransition} from 'react-spring';
import styled from 'styled-components/macro';
import {useMenu} from '../../hooks/useMenu';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Logo} from '../logo/logo';
import {Menu} from '../menu/menu';
import {Terminal} from '../terminal/terminal';

interface LayoutProps {
    children: FunctionComponent;
}

const LayoutContainer = styled('div')`
    display: grid;
    position: relative;
    grid-template-columns: minmax(min-content, 120px) minmax(min-content, 300px) 1fr;
    grid-template-rows: 85px 90px 1fr min-content;
    grid-template-areas: 'logo header header' 'logo header header' 'terminal terminal terminal' 'footer footer footer';
    grid-column-gap: ${SPACER_BIG}px;
    grid-row-gap: ${SPACER}px;
    box-sizing: border-box;
    margin: 0 ${SPACER}px;
    padding: ${SPACER}px 0;
    font-family: 'Fira Sans', Arial, Helvetica, sans-serif;

    ${mediaMin(ScreenSize.SM)} {
        grid-template-areas: 'logo header menu' 'logo header menu' 'terminal terminal terminal' 'footer footer footer';
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
        width: 1140px;
    }
`;

export const Layout: FunctionComponent<LayoutProps> = ({children: RouteComponent}: LayoutProps) => {
    const transition = useTransition(RouteComponent, item => item.displayName || 'none', {
        from: {opacity: 0, transform: 'translateY(-30px)'},
        enter: {opacity: 1, transform: 'translateY(0px)'},
        leave: {opacity: 0, transform: 'translateY(30px)', position: 'absolute'},
    });
    const [active, setActive] = useMenu();

    return (
        <LayoutContainer onClick={() => setActive(false)}>
            <Logo />
            <Header />
            <Menu active={active} setActive={setActive} />
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
