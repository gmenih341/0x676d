import {useRouter} from 'next/router';
import React, {FunctionComponent, useMemo} from 'react';
import styled from 'styled-components/macro';
import {SPACER_BIG} from '../constants/style.constants';
import {useRouteData} from '../hooks/useRouteData';
import {PageComponent} from '../types/PageComponent';
import {mediaMin} from '../utils/style.utils';
import {ConsoleContent} from './ConsoleContent.styled';
import {Footer} from './Footer';
import {Header} from './Header';
import Logo from './Logo';
import {Menu} from './Menu';
import {SideImage} from './SideImage';

interface LayoutProps {
    className?: string;
    pageComponent: PageComponent;
}

const DefaultLayoutComponent: FunctionComponent<LayoutProps> = ({className, pageComponent}) => {
    const {pathname} = useRouter();
    const {
        header: {title, description},
    } = useRouteData(pathname);
    const RouteComponent = useMemo(() => pageComponent, [pageComponent]);

    return (
        <div className={className}>
            <Logo />
            <Header title={title} description={description} />
            <Menu activePath={pathname} />
            <ConsoleContent>
                <SideImage overlap={true} imageSrc={pageComponent.image || ''}>
                    {pageComponent.headerContent}
                </SideImage>
            </ConsoleContent>
            {pageComponent.contentItems.map((x, i) => x({}, i))}
            <Footer />
        </div>
    );
};

export const DefaultLayout = styled(DefaultLayoutComponent)`
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 96px) minmax(0, 1fr) 1fr;
    grid-template-rows: 160px min-content repeat(1fr) 96px;
    grid-gap: ${SPACER_BIG}px;
    min-height: 100%;

    ${mediaMin('md')} {
        width: 760px;
        margin: 0 auto;
    }

    ${mediaMin('lg')} {
        width: 950px;
    }

    ${mediaMin('xl')} {
        width: 1100px;
    }

    ${Logo} {
        grid-column: 1 / 1;
        grid-row: 1 / 1;
    }

    ${Header} {
        grid-column: 2 / -1;
        grid-row: 1 / 1;

        ${mediaMin('md')} {
            grid-column: 2 / 3;
        }
    }

    ${Menu} {
        grid-column: 1 / -1;
        grid-row: 1 / 2;

        ${mediaMin('md')} {
            grid-column: 3 / -1;
        }
    }

    ${ConsoleContent} {
        grid-column: 1 / -1;
    }

    ${Footer} {
        grid-column: 1 / -1;
        grid-row: -2 / -1;
    }
`;
