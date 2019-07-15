import {useRouter} from 'next/router';
import React, {FunctionComponent, useMemo} from 'react';
import styled from 'styled-components/macro';
import {SPACER_BIG, SPACER_SMALL, SPACER} from '../constants/style.constants';
import {useRouteData} from '../hooks/useRouteData';
import {PageComponent} from '../types/PageComponent';
import {mediaMin, mediaMax, ScreenSize} from '../utils/style.utils';
import {ConsoleContent} from './ConsoleContent.styled';
import {Footer} from './Footer';
import {Header} from './Header';
import Logo from './Logo';
import {Menu} from './Menu';
import {SideImage} from './SideImage';
import {usePageHeaderTransition} from '../animations/hooks/usePageHeaderTransition';
import {usePageContentTransition} from '../animations/hooks/usePageContentTransition';

interface LayoutProps {
    className?: string;
    pageComponent: PageComponent;
}

const DefaultLayoutComponent: FunctionComponent<LayoutProps> = ({className, pageComponent}) => {
    const {pathname} = useRouter();
    const {
        header: {title, description},
    } = useRouteData(pathname);
    const headerTransition = usePageHeaderTransition(pageComponent);
    const contentTransition = usePageContentTransition(pageComponent);

    return (
        <div className={className}>
            <header>
                <Logo />
                <Header title={title} description={description} />
                <Menu activePath={pathname} />
            </header>
            <ConsoleContent id="test">
                {headerTransition(({props: {imageStyle, contentStyle, ...restProps}, item, key}) => (
                    <SideImage
                        key={key}
                        overlap={true}
                        imageSrc={item.image}
                        imageStyle={imageStyle}
                        contentStyle={contentStyle}
                        style={restProps}>
                        {item.headerContent}
                    </SideImage>
                ))}
            </ConsoleContent>
            {contentTransition(({props, key, item}) => item({style: props, key}))}
            <Footer />
        </div>
    );
};

export const DefaultLayout = styled(DefaultLayoutComponent)`
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 4fr) 3fr;
    grid-template-rows: minmax(0, 100px) 1fr min-content;
    grid-gap: ${SPACER_BIG}px;
    margin: ${SPACER_BIG}px auto;

    ${mediaMin('md')} {
        width: ${ScreenSize.md - SPACER}px;
    }

    ${mediaMin('lg')} {
        width: ${ScreenSize.lg - SPACER}px;
    }

    ${mediaMin('xl')} {
        width: ${ScreenSize.xl - SPACER}px;
    }

    header {
        display: flex;
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        flex-direction: row;
        align-items: center;
        margin: ${SPACER}px 0;

        ${mediaMin('md')} {
            margin: 0 -${SPACER_SMALL}px;
        }

        & > * {
            margin: 0 ${SPACER_SMALL}px;
        }

        ${Logo} {
            flex-basis: 100px;
        }

        ${Menu} {
            margin-left: auto;
        }
    }

    ${ConsoleContent} {
        grid-column: 1 / -1;
    }

    ${Footer} {
        grid-column: 1 / -1;
    }

    ${mediaMin('lg')} {
        .experience {
            grid-column: 1 / 2;
        }

        .skills {
            grid-column: 2 / 3;
        }
    }
`;
