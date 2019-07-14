import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styled from 'styled-components/macro';
import {stopPropagation} from '../../utils/event.utils';
import {routes} from '../../constants/route.constants';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {MenuItem} from './components/MenuItem';
import {MenuItemsContainer} from './components/MenuItemsContainer.styled';
import {MobileTitle} from './components/MobileTitle.styled';
import {MobileToggle} from './components/MobileToggle';
import {useToggle} from '../../hooks/useToggle';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {CSS_TRANSITION_TIME_MS} from './menu.constants';

interface MenuProps extends ClassNameOnly {
    activePath: string;
}

const MenuComponent: FunctionComponent<MenuProps> = React.memo(({activePath, className}) => {
    const [active, toggleMenu] = useToggle(false);
    const items = useMemo(
        () =>
            Object.entries(routes).map(([path, route]) => (
                <MenuItem key={path} href={path} currentPath={activePath}>
                    {route.menuText}
                </MenuItem>
            )),
        [activePath],
    );

    return (
        <nav className={className + (active ? ' active' : '')} onClick={stopPropagation}>
            <MobileToggle toggle={toggleMenu} active={active} />
            <MenuItemsContainer className={active ? 'active' : ''}>
                <MobileTitle>Menu</MobileTitle>
                {items}
            </MenuItemsContainer>
        </nav>
    );
});

export const Menu = styled(MenuComponent)`
    z-index: 1000;
    height: 100%;

    ${mediaMax('md')} {
        transition: background-color;
        transition-duration: ${CSS_TRANSITION_TIME_MS}ms;
        background-color: rgba(211, 217, 222, 0);

        &.active {
            background-color: rgba(211, 217, 222, 0.95);
        }
    }

    ${mediaMin('md')} {
        z-index: none;
        align-self: center;
        height: auto;
        background: none;
        line-height: 0;
    }
`;
