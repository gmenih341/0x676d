import styled from '@emotion/styled-base';
import React, {FunctionComponent} from 'react';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMax, ScreenSize} from '../../utils/style.utils';
import {MenuItem} from './menu-item';

interface MenuProps {
    active: boolean;
    toggle: () => void;
}

const MenuContainer = styled('nav')`
    align-self: center;
    grid-area: menu;
    z-index: 100;

    ${mediaMax(ScreenSize.MD)} {
        grid-row: 1 / 3;
        grid-column: 1 / -1;
        height: 100%;
    }
`;

const MenuItems = styled('div')`
    line-height: 0;
    text-align: right;

    ${mediaMax(ScreenSize.MD)} {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        height: 100%;
        z-index: 1000;
        text-align: center;
        padding: ${SPACER_BIG}px 0;
        transition: transform 300ms ease-in;
        justify-content: center;
        z-index: 1000;
        backdrop-filter: blur(3px);

        :not(.active) {
            transform: translateX(150%);
        }
    }
`;

const MobileToggle = styled('button')`
    position: absolute;
    z-index: 2000;
    top: ${SPACER}px;
    right: 0;
    transform: rotateY(0);
`;

export const Menu: FunctionComponent<MenuProps> = ({active, toggle}) => {
    return (
        <MenuContainer>
            <MobileToggle onClick={toggle}>{active ? 'Hide' : 'Show'}</MobileToggle>
            <MenuItems className={active ? 'active' : ''}>
                <MenuItem href="/">home</MenuItem>
                <MenuItem href="/work">work</MenuItem>
                <MenuItem href="/contact">contact</MenuItem>
            </MenuItems>
        </MenuContainer>
    );
};
