import styled from '@emotion/styled-base';
import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, COLOR_MAIN, COLOR_WHITE, SPACER_BIG, SPACER_SMALL, SPACER} from '../../style.contants';
import {mediaMax, ScreenSize, mediaMin} from '../../utils/style.utils';

interface MenuItemProps {
    href: string;
    children: string;
}

const BORDER_COLOR = COLOR_MAIN[4];
const BACKGROUND_COLOR = COLOR_BLACK;

const Anchor = styled('a')`
    flex-grow: 0;
    display: inline-block;
    position: relative;
    padding: ${SPACER_SMALL}px ${SPACER_BIG}px;
    background: ${BACKGROUND_COLOR};
    border: 1px solid ${BORDER_COLOR};
    color: ${COLOR_WHITE};
    font-size: 1em;
    line-height: 1em;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    transition: background 90ms ease-out;

    ${mediaMin(ScreenSize.MD)} {
        margin-left: ${SPACER}px;
    }

    &:hover {
        background: ${COLOR_MAIN[5]};
    }
`;

export const MenuItem: FunctionComponent<MenuItemProps> = ({children, href}) => (
    <Link href={href}>
        <Anchor href={href}>{children}</Anchor>
    </Link>
);
