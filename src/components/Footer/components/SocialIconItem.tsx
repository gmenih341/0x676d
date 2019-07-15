import styled from 'styled-components/macro';
import React, {FunctionComponent, ReactNode} from 'react';
import {COLOR_BLACK, SPACER, SPACER_SMALL} from '../../../constants/style.constants';
import {ExternalLink} from '../../ExternalLink';

export interface IconItemProps {
    href: string;
    icon: ReactNode;
    className?: string;
    children: string;
}

const Icon: FunctionComponent<IconItemProps> = ({href, icon, children, className}) => (
    <ExternalLink href={href} title={children} className={className}>
        <i>{icon}</i>
    </ExternalLink>
);

export const SocialIconItem = styled(Icon)`
    position: relative;
    overflow: hidden;
    color: ${COLOR_BLACK};
    font-size: 0.8em;
    line-height: 1em;
    text-decoration: none;

    &:not(:last-of-type) {
        margin-right: ${SPACER}px;
    }

    i {
        display: inline-block;
        position: relative;
        padding: ${SPACER_SMALL}px ${SPACER}px;
        line-height: 0;
        vertical-align: middle;
    }
`;
