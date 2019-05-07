import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styled from 'styled-components/macro';
import {useRouter} from '../../context/router.context';
import {useStopPropagation} from '../../hooks/useStopPropagation';
import {routes} from '../../routes';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {MenuItem} from './menu-item';
import {MenuItems, MobileTitle, TRANSITION} from './styled';
import {ToggleButton} from './toggle-button';

interface MenuProps {
    active: boolean;
    className?: string;
    setActive: (value: boolean) => void;
}

const MenuComponent: FunctionComponent<MenuProps> = ({active, className, setActive}) => {
    const {pathname} = useRouter();
    const stopPropagation = useStopPropagation();
    const toggleMenu = useCallback(() => setActive(!active), [active]);
    const items = useMemo(
        () =>
            Object.entries(routes).map(([path, route]) => (
                <MenuItem key={path} href={path} currentPath={pathname}>
                    {route.menuText}
                </MenuItem>
            )),
        [pathname],
    );

    return (
        <nav className={className + (active ? ' active' : '')} onClick={stopPropagation}>
            <ToggleButton toggle={toggleMenu} active={active} />
            <MenuItems className={active ? 'active' : ''}>
                <MobileTitle>Menu</MobileTitle>
                {items}
            </MenuItems>
        </nav>
    );
};

export const Menu = styled(MenuComponent)`
    grid-column: 1 / -1;
    grid-row: 1 / 3;
    z-index: 1000;
    height: 100%;

    ${mediaMax('md')} {
        transition: background ${TRANSITION};
        background: rgba(240, 242, 244, 0);

        &.active {
            background: rgba(240, 242, 244, 0.95);
        }
    }

    ${mediaMin('md')} {
        grid-area: menu;
        z-index: none;
        align-self: center;
        height: auto;
        background: none;
        line-height: 0;
    }
`;
