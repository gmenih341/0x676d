import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {useMenu} from '../../hooks/useMenu';
import {FONT_SANS, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Logo} from '../logo/logo';
import {Menu} from '../menu/menu';
import {Terminal} from '../terminal/terminal';
interface MainProps {
    className?: string;
    children: any;
}

const MainComponent: FunctionComponent<MainProps> = ({children: RouteComponent, className}) => {
    const [active, setActive] = useMenu();

    return (
        <div className={className} onClick={() => setActive(false)}>
            <Logo />
            <Header />
            <Menu active={active} setActive={setActive} />
            <Terminal customContent={!!RouteComponent.customContent} displayName={RouteComponent.displayName}>
                <RouteComponent />
            </Terminal>
            <Footer />
        </div>
    );
};

export const Main = styled(MainComponent)`
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
