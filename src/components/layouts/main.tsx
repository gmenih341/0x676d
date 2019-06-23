import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {useMenu} from '../../hooks/useMenu';
import {PageComponent} from '../../interfaces';
import {FONT_SANS, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import {usePageContentTransition} from '../../animations/hooks/usePageContentTransition';
import {usePageHeaderTransition} from '../../animations/hooks/usePageHeaderTransition';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {ImageDivisor} from '../image-divisor/image-divisor';
import {Logo} from '../logo/logo';
import {Menu} from '../menu/menu';
import {TerminalContent} from '../terminal/styled';
import {Terminal} from '../terminal/terminal';

interface MainProps {
    className?: string;
    pageComponent: PageComponent;
}

const MainComponent: FunctionComponent<MainProps> = React.memo(({pageComponent, className}) => {
    const [active, setActive] = useMenu();
    const headerTransition = usePageHeaderTransition(pageComponent);
    const contentTransition = usePageContentTransition(pageComponent);

    return (
        <div className={className} onClick={() => setActive(false)}>
            <Logo />
            <Header />
            <Menu active={active} setActive={setActive} />
            <Terminal>
                {pageComponent.headerContent && (
                    <TerminalContent>
                        {headerTransition(({props: {imageStyle, contentStyle, ...restProps}, item, key}) => (
                            <ImageDivisor
                                key={key}
                                overlap={true}
                                imageSrc={item.image}
                                imageStyle={imageStyle}
                                contentStyle={contentStyle}
                                style={restProps}>
                                {item.headerContent}
                            </ImageDivisor>
                        ))}
                    </TerminalContent>
                )}
                <Grid>
                    {contentTransition(({props, key, item: Component}) => (
                        <Component style={props} key={key} />
                    ))}
                </Grid>
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
    min-height: 100%;
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

const Grid = styled('div')`
    display: grid;
    grid-template-rows: repeat(auto);
    grid-gap: ${SPACER}px;
    line-height: 1.5;

    ${mediaMin('md')} {
        grid-template-columns: minmax(0, 4fr) minmax(0, 3fr);
    }
`;
