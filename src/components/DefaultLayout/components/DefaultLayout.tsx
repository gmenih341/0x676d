import {useRouter} from 'next/router';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {usePageHeaderTransition} from '../../../animations/usePageHeaderTransition';
import {SPACER, SPACER_BIG} from '../../../constants/style.constants';
import {useIndexDirection} from '../../../hooks/useIndexDirection';
import {useRouteData} from '../../../hooks/useRouteData';
import {PageComponent} from '../../../types/PageComponent';
import {mediaMin, ScreenSize} from '../../../utils/style.utils';
import {ConsoleContent} from '../../ConsoleContent.styled';
import {Footer} from '../../Footer';
import {Header} from '../../Header';
import {Logo} from '../../Logo';
import {Menu} from '../../Menu';
import {HeaderContainer} from './HeaderContainer.styled';
import {usePageContentTransition} from '../../../animations/usePageContentTransition';
import {ContentContainer} from './ContentContainer.styled';

interface LayoutProps {
    className?: string;
    pageComponent: PageComponent;
}

const DefaultLayoutComponent: FunctionComponent<LayoutProps> = ({className, pageComponent}) => {
    const {pathname} = useRouter();
    const routeData = useRouteData(pathname);
    const direction = useIndexDirection(routeData.index);
    const headerTransition = usePageHeaderTransition(pageComponent, direction);
    const pageTransition = usePageContentTransition(pageComponent, direction);

    return (
        <div className={className}>
            <HeaderContainer>
                <Logo />
                <Header title={routeData.header.title} description={routeData.header.description} />
                <Menu activePath={pathname} />
            </HeaderContainer>
            <ConsoleContent>
                {headerTransition(({imageProps, contentProps, props, key, HeaderComponent}) => (
                    <HeaderComponent key={key} style={props} imageStyle={imageProps} contentStyle={contentProps} />
                ))}
            </ConsoleContent>
            <ContentContainer>
                {pageTransition(({PageComponent, key, props}) => (
                    <PageComponent key={key} style={props} />
                ))}
            </ContentContainer>
            <Footer />
        </div>
    );
};

export const DefaultLayout = styled(DefaultLayoutComponent)`
    display: grid;
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

    ${mediaMin('lg')} {
        .experience {
            grid-column: 1 / 2;
        }

        .skills {
            grid-column: 2 / 3;
        }
    }
`;
