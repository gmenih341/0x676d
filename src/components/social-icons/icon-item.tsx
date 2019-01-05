import React, {FunctionComponent, DOMAttributes} from 'react';
import styled from '@emotion/styled';
import {COLOR_GRAY, SPACER} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

export interface IIconItemProps extends DOMAttributes<HTMLAnchorElement> {
    href: string;
    type: string;
}

const Icon: FunctionComponent<IIconItemProps> = ({href, type, children, ...props}) => (
    <a href={href} title={type} target="_blank" rel="noopener noreferrer" {...props}>
        <i className={`icon icon-${type}`} />
        <span>{children}</span>
    </a>
);

export const IconItem = styled(Icon)`
    height: 100%;
    color: ${COLOR_GRAY[7]};
    text-decoration: none;
    opacity: 0.6;
    will-change: opacity;
    transition: opacity 300ms ease-in;

    &:not(:first-of-type) {
        margin-left: ${SPACER}px;
    }

    &:hover {
        opacity: 1;
    }

    span {
        font-size: 16px;
        display: none;
        vertical-align: baseline;

        ${mediaMin(ScreenSize.SM)} {
            display: inline;
        }
    }
    i.icon {
        vertical-align: baseline;
        font-size: 18px;
    }
`;