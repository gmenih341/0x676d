import {graphql, useStaticQuery, PageRendererProps} from 'gatsby';
import React, {FunctionComponent, useMemo, useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components/macro';
import {usePageContentTransition} from '../../../animations/usePageContentTransition';
import {usePageHeaderTransition} from '../../../animations/usePageHeaderTransition';
import {useIndexDirection} from '../../../hooks/useIndexDirection';
import {useRouteData} from '../../../hooks/useRouteData';
import {THEME_LIGHT} from '../../../theme';
import {PageComponent} from '../../../types/PageComponent';
import {ConsoleContent} from '../../ConsoleContent.styled';
import {Footer} from '../../Footer';
import {GlobalStyle} from '../../GlobalStyle';
import {Header} from '../../Header';
import {Logo} from '../../Logo';
import {Menu} from '../../Menu';
import {ContentContainer} from './ContentContainer.styled';
import {DefaultLayoutContainer} from './DefaultLayoutContainer.styled';
import {Fonts} from './Fonts';
import {HeaderContainer} from './HeaderContainer.styled';
import {Meta} from './Meta';

interface LayoutChildren {
    type: PageComponent;
}

interface LayoutProps {
    className?: string;
    children: LayoutChildren;
}

function usePageComponents(children: LayoutChildren, index: number): PageComponent {
    return useMemo(() => (children && children.type) || null, [index]);
}

export const DefaultLayout: FunctionComponent<LayoutProps & PageRendererProps> = ({children, location}) => {
    const siteData = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    );
    const routeData = useRouteData(location.pathname);
    const {HeaderComponent, ContentComponent} = usePageComponents(children, routeData.index);
    const direction = useIndexDirection(routeData.index);
    const headerTransition = usePageHeaderTransition(HeaderComponent, routeData.index, direction);
    const pageTransition = usePageContentTransition(ContentComponent, routeData.index, direction);

    return (
        <ThemeProvider theme={THEME_LIGHT}>
            <GlobalStyle />
            <Fonts />
            <Meta title={siteData.site.siteMetadata.title} description={siteData.site.siteMetadata.description} routeData={routeData} />
            <DefaultLayoutContainer>
                <HeaderContainer>
                    <Logo />
                    <Header title={siteData?.site?.siteMetadata?.title} description={siteData?.site?.siteMetadata?.description} />
                    <Menu activePath={location.pathname} />
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
            </DefaultLayoutContainer>
        </ThemeProvider>
    );
};
