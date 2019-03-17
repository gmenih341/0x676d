import styled from 'styled-components/macro';
import React, {FunctionComponent, ReactNode} from 'react';
import {COLOR_BLACK, SPACER, SPACER_SMALL} from '../../style.contants';

export interface IconItemProps {
    href: string;
    icon: ReactNode;
    className?: string;
    children: string;
}

const Icon: FunctionComponent<IconItemProps> = ({href, icon, children, className}) => (
    <a href={href} title={children} target="_blank" rel="noopener noreferrer" className={className}>
        <i>{icon}</i>
    </a>
);

export const SocialIconItem = styled(Icon)`
    color: ${COLOR_BLACK};
    line-height: 22px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    font-size: 0.8em;

    &:not(:last-of-type) {
        margin-right: ${SPACER}px;
    }

    i {
        line-height: 0;
        display: inline-block;
        vertical-align: middle;
        padding: ${SPACER_SMALL}px ${SPACER}px;
        position: relative;
    }
`;
