import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY, SPACER, SPACER_SMALL, SPACER_BIG} from '../../style.contants';
import {mediaMax, mediaMin} from '../../utils/style.utils';

const SECTION_WIDTH = 250;

enum DivisorProtection {
    left,
    right,
}

interface DivisorProps {
    className?: string;
    direction?: keyof typeof DivisorProtection;
    imageSrc: string;
    overlap?: boolean;
}

const ImageDivisorComponent: FunctionComponent<DivisorProps> = ({imageSrc, className, children}) => (
    <div className={className}>
        <div className="image" style={{backgroundImage: `url(${imageSrc})`}} />
        <div className="content">{children}</div>
    </div>
);

export const ImageDivisor = styled(ImageDivisorComponent)`
    display: flex;
    position: relative;
    flex-direction: ${({direction}) => (direction === 'right' ? 'row-reverse' : 'row')};
    margin: ${-SPACER}px;
    padding: ${SPACER}px;
    background: ${COLOR_GRAY[8]};

    .content {
        z-index: 1;
        ${mediaMin('md')} {
            display: flex;
            top: 0;
            flex-direction: column;
            justify-content: center;
            text-align: ${({direction}) => (direction === 'right' ? 'right' : 'left')};
            ${({overlap, direction}) => `
                margin-${direction || 'left'}: ${SPACER_BIG * (overlap === true ? -1 : 1)}px;
            `}

            > * {
                margin: ${SPACER_SMALL}px 0;
                padding: ${SPACER_SMALL}px;
                background: ${({overlap}) => (overlap === true ? COLOR_GRAY[8] : 'none')};
            }
        }
    }

    .image {
        position: static;
        flex-shrink: 0;
        width: ${SECTION_WIDTH}px;
        min-height: ${SECTION_WIDTH}px;
        margin: ${-SPACER}px;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        vertical-align: middle;

        ${mediaMax('md')} {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: ${SPACER}px;
            opacity: 0.15;
        }
    }
`;
