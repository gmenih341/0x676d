import Head from 'next/head';
import React, {FunctionComponent, useEffect} from 'react';
import styled from 'styled-components/macro';
import {useRouter} from '../../context/router.context';
import {useRouteData} from '../../hooks/useRouteData';
import {mediaMin} from '../../utils/style.utils';
import {ClassNameOnly} from '../common/types';
import {HeaderTitle} from './header-title';

const HeaderComponent: FunctionComponent<ClassNameOnly> = React.memo(({className}) => {
    const {pathname} = useRouter();
    const {header} = useRouteData(pathname);

    return (
        <header className={className}>
            <Head>
                <title>
                    {header.title} / {header.description}
                </title>
                <meta name="description" content={header.description} />
            </Head>
            <HeaderTitle title={header.title} description={header.description} />
        </header>
    );
});

export const Header = styled(HeaderComponent)`
    display: flex;
    position: relative;
    grid-area: header;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    ${mediaMin('sm')} {
        text-align: left;
    }
`;
