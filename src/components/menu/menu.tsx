import styled from '@emotion/styled-base';
import React, {FunctionComponent} from 'react';
import {MenuItem} from './menu-item';

const MenuContainer = styled('nav')`
    align-self: center;
    grid-area: menu;
    text-align: right;
`;

export const Menu: FunctionComponent = () => {
    return (
        <MenuContainer>
            <MenuItem href="/">home</MenuItem>
            <MenuItem href="/work">work</MenuItem>
            <MenuItem href="/contact">contact</MenuItem>
        </MenuContainer>
    );
};
