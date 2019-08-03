import React, {FunctionComponent} from 'react';
import {animated} from 'react-spring';
import styled, {CSSProperties} from 'styled-components/macro';
import {COLOR_GRAY, SPACER, SPACER_BIG, SPACER_SMALL} from '../constants/style.constants';
import {mediaMax, mediaMin} from '../utils/style.utils';

const SECTION_WIDTH = 250;

enum SideImageDirection {
    left,
    right,
}

interface SideImagePros {
    className?: string;
    direction?: keyof typeof SideImageDirection;
    imageSrc: string;
    overlap?: boolean;
    imageStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    style?: CSSProperties;
}

const SideImageComponent: FunctionComponent<SideImagePros> = ({className, children, contentStyle, imageStyle, style}) => (
    <animated.div className={className} style={style}>
        <animated.div className="image" style={imageStyle} />
        <animated.div className="content" style={contentStyle}>
            {children}
        </animated.div>
    </animated.div>
);

export const SideImage = styled(SideImageComponent)`
    display: flex;
    position: relative;
    box-sizing: content-box;
    flex-direction: ${({direction}) => (direction === 'right' ? 'row-reverse' : 'row')};
    margin: ${-SPACER}px;
    padding: ${SPACER}px;
    background: ${COLOR_GRAY[8]};

    .content {
        z-index: 1;
        ${mediaMin('sm')} {
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
        background: url(${({imageSrc}) => imageSrc});
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
        vertical-align: middle;

        ${mediaMax('sm')} {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: ${SPACER}px;
            opacity: 0.15;
        }
    }
`;
