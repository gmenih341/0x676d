import React, {FunctionComponent, useCallback} from 'react';
import styled from 'styled-components/macro';
import {useRouter} from '../../context/router.context';
import {useStopPropagation} from '../../hooks/useStopPropagation';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMax, mediaMin, ScreenSize} from '../../utils/style.utils';
import {MenuItem} from './menu-item';
import {ToggleButton} from './toggle-button';

interface MenuProps {
    active: boolean;
    setActive: (value: boolean) => void;
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
            transform: translateY(-50px);
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

export const Menu: FunctionComponent<MenuProps> = ({active, setActive}) => {
    const {pathname} = useRouter();
    const stopPropagation = useStopPropagation();
    const toggleMenu = useCallback(() => setActive(!active), [active]);

    return (
        <MenuContainer className={active ? 'active' : ''} onClick={stopPropagation}>
            <ToggleButton toggle={toggleMenu} active={active} />
            <MenuItems className={active ? 'active' : ''}>
                <MobileTitle>Menu</MobileTitle>
                <MenuItem href="/" currentPath={pathname}>
                    home
                </MenuItem>
                <MenuItem href="/work" currentPath={pathname}>
                    work
                </MenuItem>
                <MenuItem href="/contact" currentPath={pathname}>
                    contact
                </MenuItem>
            </MenuItems>
        </MenuContainer>
    );
};
