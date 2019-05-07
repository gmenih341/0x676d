import React, {FunctionComponent} from 'react';
import {useTransition} from 'react-spring';
import styled from 'styled-components/macro';
import {useMenu} from '../../hooks/useMenu';
import {FONT_SANS, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Logo} from '../logo/logo';
import {Menu} from '../menu/menu';
import {Terminal} from '../terminal/terminal';

interface LayoutProps {
    className?: string;
    children: FunctionComponent;
}

const LayoutComponent: FunctionComponent<LayoutProps> = ({children: RouteComponent, className}: LayoutProps) => {
    const transition = useTransition(RouteComponent, item => item.displayName || 'none', {
        from: {opacity: 0, transform: 'translateY(-30px)'},
        enter: {opacity: 1, transform: 'translateY(0px)'},
        leave: {opacity: 0, transform: 'translateY(30px)', position: 'absolute'},
    });
    const [active, setActive] = useMenu();

    return (
        <div className={className} onClick={() => setActive(false)}>
            <Logo />
            <Header />
            <Menu active={active} setActive={setActive} />
            {transition.map(({item: RouteComponent, props, key}) => (
                <Terminal key={key} style={props}>
                    <RouteComponent />
                </Terminal>
            ))}
            <Footer />
        </div>
    );
};

export const Layout = styled(LayoutComponent)`
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
    font-family: ${FONT_SANS};

    ${mediaMin('sm')} {
        grid-template-areas: 'logo header menu' 'logo header menu' 'terminal terminal terminal' 'footer footer footer';
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
        width: 1140px;
    }
`;
