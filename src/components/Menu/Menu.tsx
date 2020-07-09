import React, {FunctionComponent, useEffect, useMemo} from 'react';
import styled from 'styled-components/macro';
import {routes} from '../../constants/route.constants';
import {useToggle} from '../../hooks/useToggle';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {stopPropagation} from '../../utils/event.utils';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {MenuItem} from './components/MenuItem';
import {MenuItemsContainer} from './components/MenuItemsContainer.styled';
import {MobileTitle} from './components/MobileTitle.styled';
import {MobileToggle} from './components/MobileToggle';
import {CSS_TRANSITION_TIME_MS} from './menu.constants';

interface MenuProps extends ClassNameOnly {
    activePath: string;
}

const MenuComponent: FunctionComponent<MenuProps> = React.memo(({activePath, className}) => {
    const [active, toggleMenu] = useToggle(false);
    const {pathname} = useMemo(() => window.location, [window.location.pathname]);

    useEffect(() => {
        if (active) {
            toggleMenu(false);
        }
    }, [pathname]);

    const items = useMemo(
        () =>
            routes.map((route) => (
                <MenuItem key={route.path} href={route.path} currentPath={activePath}>
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
        background-color: rgba(153, 166, 178, 0);

        &.active {
            background-color: rgba(153, 166, 178, 0.95);
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
