import styled from '@emotion/styled-base';
import React, {FunctionComponent, ReactNode} from 'react';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Logo} from '../logo/logo';
import {Terminal} from '../terminal/terminal';
import {Menu} from '../menu/menu';

interface LayoutProps {
    children: ReactNode;
}

const LayoutContainer = styled('div')`
    display: grid;
    height: auto;
    grid-template-rows: 85px 90px 1fr min-content;
    grid-template-columns: minmax(0, 150px) minmax(0, 300px) 1fr;
    grid-template-areas: 'logo logo logo' 'header header header' 'terminal terminal terminal' 'footer footer footer';
    grid-row-gap: ${SPACER}px;
    grid-column-gap: ${SPACER_BIG}px;
    padding: ${SPACER}px 0;
    margin: 0 ${SPACER}px;
    box-sizing: border-box;
    font-family: Fira Sans, Arial, Helvetica, sans-serif;

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
    return (
        <LayoutContainer>
            <Logo />
            <Header />
            <Menu />
            <Terminal>{children}</Terminal>
            <Footer />
        </LayoutContainer>
    );
};
