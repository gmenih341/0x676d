import Head from 'next/head';
import React, {FunctionComponent} from 'react';
import {useTransition} from 'react-spring';
import styled from 'styled-components/macro';
import {useRouter} from '../../context/router.context';
import {useRouteData} from '../../hooks/useRouteData';
import {mediaMin} from '../../utils/style.utils';
import {HeaderTitle} from './header-title';
import {ClassNameOnly} from '../common/types';

const HeaderComponent: FunctionComponent<ClassNameOnly> = ({className}) => {
    const {pathname} = useRouter();
    const {header} = useRouteData(pathname);
    const transition = useTransition(header, item => item.title, {
        from: {opacity: 0, transform: 'translateY(30px)'},
        enter: {opacity: 1, transform: 'translateY(0px)'},
        leave: {opacity: 0, transform: 'translateY(-30px)', position: 'absolute'},
    });
    return (
        <header className={className}>
            <Head>
                <title>
                    {header.title} / {header.description}
                </title>
                <meta name="description" content={header.description} />
            </Head>
            {transition.map(({item, key, props}) => (
                <HeaderTitle key={key} style={props} title={item.title} description={item.description} />
            ))}
        </header>
    );
};

export const Header = styled(HeaderComponent)`
    position: relative;
    grid-area: header;

    ${mediaMin('sm')} {
        text-align: left;
    }
`;
