import React, {FunctionComponent, useRef} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {useMainContentTransition} from '../../hooks/animations/useMainContentTransition';
import {useMenu} from '../../hooks/useMenu';
import {PageComponent} from '../../interfaces';
import {FONT_SANS, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Logo} from '../logo/logo';
import {Menu} from '../menu/menu';
import {ScrollToReveal} from '../scroll-to-reveal/scroll-to-reveal';
import {TerminalContent} from '../terminal/styled';
import {Terminal} from '../terminal/terminal';

interface MainProps {
    className?: string;
    children: PageComponent;
}

const MainComponent: FunctionComponent<MainProps> = React.memo(({children, className}) => {
    const [active, setActive] = useMenu();
    const [parent, transition] = useMainContentTransition(children);

    return (
        <div className={className} onClick={() => setActive(false)}>
            <Logo />
            <Header />
            <Menu active={active} setActive={setActive} />
            <Terminal customContent={!!children.customContent} displayName={children.displayName}>
                <TerminalContent style={parent}>
                    {transition(({props, key, item}) => (
                        <animated.div key={'home-page-' + key} style={props}>
                            {item.children}
                        </animated.div>
                    ))}
                </TerminalContent>
                <ScrollToReveal>Hello!</ScrollToReveal>
            </Terminal>
            <Footer />
        </div>
    );
});

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

    ${TerminalContent} {
        margin-bottom: ${SPACER}px;
    }
`;
