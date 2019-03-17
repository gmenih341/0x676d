import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_BLACK, COLOR_MAIN, SPACER, SPACER_SMALL} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

interface MenuItemProps {
    href: string;
    children: string;
    currentPath: string;
}

const Anchor = styled('a')`
    display: block;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    color: ${COLOR_BLACK};
    font-size: 1em;
    line-height: 1em;
    text-decoration: none;
    margin: ${SPACER}px 0;
    position: relative;
    font-weight: 300;

    &:first-of-type {
        margin: 0 !important;
    }

    ${mediaMin(ScreenSize.MD)} {
        display: inline-block;
        margin: 0 0 0 ${SPACER_SMALL}px;
    }

    ${mediaMin(ScreenSize.LG)} {
        margin: 0 0 0 ${SPACER}px;
    }

    strong,
    span {
        display: inline-block;
        transition: opacity 300ms, visibility 300ms;
    }

    strong {
        font-weight: 600;
        position: absolute;
        left: 0;
        text-align: center;
        width: 100%;
        opacity: 0;
        visibility: hidden;
    }

    &.active {
        color: ${COLOR_MAIN[6]};

        strong {
            opacity: 1;
            visibility: visible;
        }
        span {
            opacity: 0;
            visibility: hidden;
        }
    }
`;

export const MenuItem: FunctionComponent<MenuItemProps> = ({children, href, currentPath}) => (
    <Link href={href}>
        <Anchor className={href === currentPath ? 'active' : ''} href={href}>
            <span>{children}</span>
            <strong>{children}</strong>
        </Anchor>
    </Link>
);
