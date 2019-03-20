import React, {FunctionComponent, useCallback} from 'react';
import styled from 'styled-components/macro';
import {useRouter} from '../../context/router.context';
import {useStopPropagation} from '../../hooks/useStopPropagation';
import {SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {MenuItem} from './menu-item';
import {ToggleButton} from './toggle-button';

interface MenuProps {
    active: boolean;
    setActive: (value: boolean) => void;
}

const TRANSITION = '250ms ease';

const MenuContainer = styled('nav')`
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

const MenuItems = styled('div')`
    display: block;
    box-sizing: border-box;
    align-self: center;
    text-align: right;
    white-space: nowrap;

    ${mediaMax('md')} {
        visibility: hidden;
        z-index: 1000;
        min-height: 100%;
        padding: ${SPACER}px ${SPACER_BIG}px;
        transform: translateY(-50px);
        transition: transform ${TRANSITION}, opacity ${TRANSITION}, visibility ${TRANSITION};
        opacity: 0;
        text-align: center;

        &.active {
            visibility: inherit;
            transform: translateY(-15px);
            opacity: 1;
        }
    }
`;

const MobileTitle = styled('h2')`
    display: none;

    ${mediaMax('md')} {
        display: block;
        margin: 0;
        margin-bottom: ${SPACER}px;
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
