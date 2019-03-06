import styled from '@emotion/styled-base';
import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, SPACER, SPACER_SMALL} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

interface MenuItemProps {
    href: string;
    children: string;
}

const Anchor = styled('a')`
    display: block;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    color: ${COLOR_BLACK};
    font-size: 1em;
    line-height: 1em;
    text-decoration: none;
    margin: ${SPACER}px 0;

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
`;

export const MenuItem: FunctionComponent<MenuItemProps> = ({children, href}) => (
    <Link href={href}>
        <Anchor href={href}>/{children}</Anchor>
    </Link>
);
