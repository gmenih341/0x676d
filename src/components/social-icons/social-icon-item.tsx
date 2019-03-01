import styled from '@emotion/styled';
import React, {FunctionComponent, ReactNode} from 'react';
import {COLOR_BLACK, COLOR_WHITE, SPACER, SPACER_SMALL} from '../../style.contants';
import {mediaMax, ScreenSize} from '../../utils/style.utils';

export interface IconItemProps {
    href: string;
    transitionColor?: string;
    icon: ReactNode;
    className?: string;
    children: string;
}

const Icon: FunctionComponent<IconItemProps> = ({href, icon, children, className}) => (
    <a href={href} title={children} target="_blank" rel="noopener noreferrer" className={className}>
        <i>{icon}</i>
        <span>{children}</span>
    </a>
);

export const SocialIconItem = styled(Icon)`
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    line-height: 25px;
    text-decoration: none;
    position: relative;
    overflow: hidden;

    &:not(:first-of-type) {
        margin-left: ${SPACER}px;
    }

    i {
        line-height: 0;
        display: inline-block;
        vertical-align: middle;
        padding: ${SPACER_SMALL}px ${SPACER}px;
        background: ${props => props.transitionColor};
        position: relative;

        &:after {
            display: block;
            content: '';
            position: absolute;
            height: 0;
            width: 0;
            right: -13px;
            top: 0;
            border-left: 7px solid red;
            border-top: 20px solid red;
            border-color: ${props => props.transitionColor};
            border-right: 7px solid transparent;
            border-bottom: 20px solid transparent;
        }
    }

    span {
        vertical-align: middle;
        padding: ${SPACER_SMALL}px ${SPACER}px;

        ${mediaMax(ScreenSize.MD)} {
            display: none;
        }
    }
`;
