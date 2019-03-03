import styled from '@emotion/styled-base';
import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import {COLOR_GRAY, COLOR_WHITE, SPACER, SPACER_BIG, SPACER_SMALL, COLOR_MAIN, COLOR_BLACK} from '../../style.contants';

interface MenuItemProps {
    href: string;
    children: string;
}

const BORDER_COLOR = COLOR_MAIN[4];
const BACKGROUND_COLOR = COLOR_BLACK;

const Anchor = styled('a')`
    font-size: 1em;
    display: inline-block;
    display: inline-block;
    padding: ${SPACER_SMALL}px ${SPACER_BIG}px;
    color: ${COLOR_WHITE};
    margin-left: ${SPACER_BIG}px;
    background: ${BACKGROUND_COLOR};
    cursor: pointer;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid ${BORDER_COLOR};
    transition: background 90ms ease-out;

    &:hover {
        background: ${COLOR_MAIN[5]};
    }

    &:before {
        width: 0;
        height: 0;
        display: block;
        content: '';
        border: 1px red dashed;
        position: absolute;
        border-left: 7px solid;
        border-top: 25px solid;
        border-color: ${BORDER_COLOR};
        border-right: 7px transparent solid;
        border-bottom: 25px transparent solid;
        left: 0;
        top: 0;
    }
    &:after {
        width: 0;
        height: 0;
        display: block;
        content: '';
        border: 1px red dashed;
        position: absolute;
        border-right: 7px solid;
        border-bottom: 25px solid;
        border-color: ${BORDER_COLOR};
        border-left: 7px transparent solid;
        border-top: 25px transparent solid;
        bottom: 0;
        right: 0;
    }
`;

export const MenuItem: FunctionComponent<MenuItemProps> = ({children, href}) => (
    <Link href={href}>
        <Anchor href={href}>{children}</Anchor>
    </Link>
);
