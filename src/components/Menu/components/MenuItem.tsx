import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {SPACER, SPACER_SMALL, COLOR_BLACK, FONT_SANS, COLOR_MAIN} from '../../../constants/style.constants';
import {mediaMin} from '../../../utils/style.utils';

interface MenuItemProps {
    href: string;
    children: string;
    className?: string;
    currentPath?: string;
    isActive?: boolean;
}

const MenuItemComponent: FunctionComponent<MenuItemProps> = ({children, className, href, currentPath}) => (
    <Link href={href}>
        <a href={href} className={(className = className + (href === currentPath ? ' active' : ''))}>
            <span>{children}</span>
            <strong>{children}</strong>
        </a>
    </Link>
);

export const MenuItem = styled(MenuItemComponent)`
    display: block;
    position: relative;
    margin: ${SPACER}px 0;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    color: ${COLOR_BLACK};
    font-family: ${FONT_SANS};
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    text-decoration: none;

    &:first-of-type {
        margin: 0 !important;
    }

    ${mediaMin('md')} {
        display: inline-block;
        margin: 0 0 0 ${SPACER_SMALL}px;
    }

    ${mediaMin('lg')} {
        margin: 0 0 0 ${SPACER}px;
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
        color: ${COLOR_MAIN[6]};

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
