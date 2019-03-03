import styled from '@emotion/styled';
import {withRouter} from 'next/router';
import Head from 'next/head';
import React from 'react';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {HeaderTitle} from './header-title';
import {useRouteData} from '../../hooks/useRouteData';

const HeaderContainer = styled('header')`
    position: relative;
    text-align: center;
    grid-area: header;

    ${mediaMin(ScreenSize.SM)} {
        text-align: left;
    }
`;
export const Header = withRouter(({router}) => {
    const {header} = useRouteData((router && router.pathname) || '/');
    return (
        <HeaderContainer>
            <Head>
                <title>{header.title} / Gregor Menih</title>
                <meta name="description" content={header.description} />
            </Head>
            <HeaderTitle title={header.title} description={header.description} />
        </HeaderContainer>
    );
});
