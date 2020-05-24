import Head from 'next/head';
import {useRouter} from 'next/router';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {usePageContentTransition} from '../../../animations/usePageContentTransition';
import {usePageHeaderTransition} from '../../../animations/usePageHeaderTransition';
import {useIndexDirection} from '../../../hooks/useIndexDirection';
import {useRouteData} from '../../../hooks/useRouteData';
import {PageComponent} from '../../../types/PageComponent';
import {mediaMin, ScreenSize} from '../../../utils/style.utils';
import {themePx, themeSpacer} from '../../../utils/theme.utils';
import {ConsoleContent} from '../../ConsoleContent.styled';
import {Footer} from '../../Footer';
import {Header} from '../../Header';
import {Logo} from '../../Logo';
import {Menu} from '../../Menu';
import {ContentContainer} from './ContentContainer.styled';
import {HeaderContainer} from './HeaderContainer.styled';

interface LayoutProps {
    className?: string;
    pageComponent: PageComponent;
}

const DefaultLayoutComponent: FunctionComponent<LayoutProps> = ({className, pageComponent}) => {
    const {pathname} = useRouter();
    const routeData = useRouteData(pathname);
    const direction = useIndexDirection(pageComponent.index);
    const headerTransition = usePageHeaderTransition(pageComponent, direction);
    const pageTransition = usePageContentTransition(pageComponent, direction);

    console.log(direction);

    return (
        <div className={className}>
            <Head>
                <title>Gregor Menih / {routeData.head.title}</title>
                <meta name="description" content={routeData.head.description} />
            </Head>
            <HeaderContainer>
                <Logo />
                <Header title="Gregor Menih" description="full-stack web developer" />
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
    grid-gap: ${themeSpacer(9)};
    margin: ${themeSpacer(9)} auto;

    ${mediaMin('md')} {
        width: ${themePx((t) => ScreenSize.md - t.spacers[9])};
    }

    ${mediaMin('lg')} {
        width: ${themePx((t) => ScreenSize.lg - t.spacers[5])};
    }

    ${mediaMin('xl')} {
        width: ${themePx((t) => ScreenSize.xl - t.spacers[5])};
    }
`;
