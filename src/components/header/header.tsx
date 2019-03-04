import styled from '@emotion/styled';
import Head from 'next/head';
import {withRouter} from 'next/router';
import React from 'react';
import {useRouteData} from '../../hooks/useRouteData';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {HeaderTitle} from './header-title';
import {MENU_BACKGROP_BLUR} from '../../style.contants';

interface HeaderProps {
    blur: boolean;
}

const HeaderContainer = styled('header')`
    position: relative;
    text-align: center;
    grid-area: header;
    transition: filter 300ms;

    &.blur {
        filter: blur(${MENU_BACKGROP_BLUR}px);
    }

    ${mediaMin(ScreenSize.SM)} {
        text-align: left;
    }
`;
export const Header = withRouter<HeaderProps>(({router, blur}) => {
    const {header} = useRouteData((router && router.pathname) || '/');
    return (
        <HeaderContainer className={blur ? 'blur' : ''}>
            <Head>
                <title>{header.title} / Gregor Menih</title>
                <meta name="description" content={header.description} />
            </Head>
            <HeaderTitle title={header.title} description={header.description} />
        </HeaderContainer>
    );
});
