import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {mediaMin} from '../../utils/style.utils';
import {Description} from './components/Description.styled';
import {Title} from './components/Title.styled';

interface HeaderProps extends ClassNameOnly {
    title: string;
    description: string;
}

const HeaderComponent: FunctionComponent<HeaderProps> = React.memo(({className, title, description}) => {
    return (
        <div className={className}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </div>
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
