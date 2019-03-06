import styled from '@emotion/styled-base';
import React, {FunctionComponent} from 'react';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMax, mediaMin, ScreenSize} from '../../utils/style.utils';
import {MenuItem} from './menu-item';
import {ToggleButton} from './toggle-button';

interface MenuProps {
    active: boolean;
    toggle: () => void;
}

const TRANSITION = '250ms ease';

const MenuContainer = styled('nav')`
    grid-row: 1 / 3;
    grid-column: 1 / -1;
    height: 100%;
    z-index: 1000;

    ${mediaMax(ScreenSize.MD)} {
        background: rgba(240, 242, 244, 0);
        transition: background ${TRANSITION};

        &.active {
            background: rgba(240, 242, 244, 0.95);
        }
    }

    ${mediaMin(ScreenSize.MD)} {
        height: auto;
        align-self: center;
        grid-area: menu;
        z-index: none;
        line-height: 0;
        background: none;
    }
`;

const MenuItems = styled('div')`
    display: block;
    align-self: center;
    text-align: right;
    white-space: nowrap;
    box-sizing: border-box;

    ${mediaMax(ScreenSize.MD)} {
        min-height: 100%;
        padding: ${SPACER}px ${SPACER_BIG}px;
        z-index: 1000;
        transform: translateY(-15px);
        transition: transform ${TRANSITION}, opacity ${TRANSITION}, visibility ${TRANSITION};
        text-align: center;
        visibility: visible;

        &:not(.active) {
            transform: translateY(50px);
            opacity: 0;
            visibility: hidden;
        }
    }
`;

const MobileTitle = styled('h2')`
    margin: 0;
    margin-bottom: ${SPACER}px;

    ${mediaMin(ScreenSize.MD)} {
        display: none;
    }
`;

export const Menu: FunctionComponent<MenuProps> = ({active, toggle}) => {
    return (
        <MenuContainer className={active ? 'active' : ''}>
            <ToggleButton toggle={toggle} active={active} />
            <MenuItems className={active ? 'active' : ''}>
                <MobileTitle>Menu</MobileTitle>
                <MenuItem href="/">home</MenuItem>
                <MenuItem href="/work">work</MenuItem>
                <MenuItem href="/contact">contact</MenuItem>
            </MenuItems>
        </MenuContainer>
    );
};
