import Head from 'next/head';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {mediaMin} from '../../utils/style.utils';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {Title} from './components/Title.styled';
import {Description} from './components/Description.styled';

interface HeaderProps extends ClassNameOnly {
    title: string;
    description: string;
}

const HeaderComponent: FunctionComponent<HeaderProps> = React.memo(({className, title, description}) => {
    return (
        <>
            <Head>
                <title>
                    {title} / {description}
                </title>
                <meta name="description" content={description} />
            </Head>
            <header className={className}>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </header>
        </>
    );
});

export const Header = styled(HeaderComponent)`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    ${mediaMin('sm')} {
        text-align: left;
    }
`;
