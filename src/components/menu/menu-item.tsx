import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_BLACK, COLOR_MAIN, SPACER, SPACER_SMALL} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';

interface MenuItemProps {
    href: string;
    children: string;
    currentPath: string;
}

const Anchor = styled('a')`
    display: block;
    position: relative;
    margin: ${SPACER}px 0;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    color: ${COLOR_BLACK};
    font-size: 1em;
    font-weight: 300;
    line-height: 1em;
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

export const MenuItem: FunctionComponent<MenuItemProps> = ({children, href, currentPath}) => (
    <Link href={href}>
        <Anchor className={href === currentPath ? 'active' : ''} href={href}>
            <span>{children}</span>
            <strong>{children}</strong>
        </Anchor>
    </Link>
);
