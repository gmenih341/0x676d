import styled from '@emotion/styled';
import Head from 'next/head';
import React, {FunctionComponent} from 'react';
import {useTransition} from 'react-spring';
import {useRouter} from '../../context/router.context';
import {useRouteData} from '../../hooks/useRouteData';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {HeaderTitle} from './header-title';

const HeaderContainer = styled('header')`
    position: relative;
    text-align: center;
    grid-area: header;

    ${mediaMin(ScreenSize.SM)} {
        text-align: left;
    }
`;
export const Header: FunctionComponent = () => {
    const {pathname} = useRouter();
    const {header} = useRouteData(pathname);
    const transition = useTransition(header, item => item.title, {
        from: {opacity: 0, transform: 'translateY(30px)'},
        enter: {opacity: 1, transform: 'translateY(0px)'},
        leave: {opacity: 0, transform: 'translateY(-30px)', position: 'absolute'},
    });
    return (
        <HeaderContainer>
            <Head>
                <title>
                    {header.title} / {header.description}
                </title>
                <meta name="description" content={header.description} />
            </Head>
            {transition.map(({item, key, props}) => (
                <HeaderTitle key={key} style={props} title={item.title} description={item.description} />
            ))}
        </HeaderContainer>
    );
};
