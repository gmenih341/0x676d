import {Link} from 'gatsby';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_SANS} from '../../../constants/style.constants';
import {mediaMin} from '../../../utils/style.utils';
import {themeColor, themeSpacer} from '../../../utils/theme.utils';

interface MenuItemProps {
    href: string;
    children: string;
    className?: string;
    currentPath?: string;
    isActive?: boolean;
}

const MenuItemComponent: FunctionComponent<MenuItemProps> = ({children, className, href, currentPath}) => (
    <Link to={href} className={className + (href === currentPath ? ' active' : '')}>
        <span>{children}</span>
        <strong>{children}</strong>
    </Link>
);

export const MenuItem = styled(MenuItemComponent)`
    display: block;
    position: relative;
    margin: ${themeSpacer(6)} 0;
    padding: ${themeSpacer(3)} ${themeSpacer(6)};
    color: ${themeColor('textDark')};
    font-family: ${FONT_SANS};
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    text-decoration: none;
    cursor: pointer;

    &:first-of-type {
        margin: 0 !important;
    }

    ${mediaMin('md')} {
        display: inline-block;
        margin: 0 0 0 ${themeSpacer(3)};
    }

    ${mediaMin('lg')} {
        margin: 0 0 0 ${themeSpacer(6)};
    }

    strong,
    span {
        display: inline-block;
        transition: opacity 300ms, visibility 300ms;
    }

    strong {
        visibility: hidden;
        position: absolute;
        left: 0;
        width: 100%;
        opacity: 0;
        font-weight: 600;
        text-align: center;
    }

    &.active {
        color: ${themeColor('main')};

        strong {
            visibility: inherit;
            opacity: 1;
        }
        span {
            visibility: hidden;
            opacity: 0;
        }
    }
`;
