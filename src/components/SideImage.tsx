import React, {FunctionComponent} from 'react';
import {animated} from 'react-spring';
import styled, {css, CSSProperties} from 'styled-components/macro';
import {ImageSet, MimeType} from '../types/ImageMime';
import {mediaMax, mediaMin} from '../utils/style.utils';
import {themeColor, themeSpacer} from '../utils/theme.utils';

const SECTION_WIDTH = 250;

enum SideImageDirection {
    left,
    right,
}

interface SideImagePros {
    className?: string;
    direction?: keyof typeof SideImageDirection;
    overlap?: boolean;
    imageSet: Partial<ImageSet>;
    imageStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    style?: CSSProperties;
    alt?: string;
}

const SideImageComponent: FunctionComponent<SideImagePros> = ({alt, className, children, contentStyle, imageStyle, style, imageSet}) => (
    <animated.div className={className} style={style}>
        <animated.picture className="image" style={imageStyle}>
            {Object.entries(imageSet).map(([mime, src]) => (
                <source key={mime} srcSet={src} type={mime} />
            ))}
            {MimeType.WEBP in imageSet && <img src={imageSet['img/png']} alt={alt} />}
        </animated.picture>
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
    margin: ${themeSpacer(6, -1)};
    padding: ${themeSpacer(6)};
    background: ${themeColor('terminalBackground')};

    .content {
        z-index: 1;
        ${mediaMin('sm')} {
            display: flex;
            top: 0;
            flex-direction: column;
            justify-content: center;
            text-align: ${({direction}) => (direction === 'right' ? 'right' : 'left')};
            ${({overlap, direction}) => css`
                margin-${direction || 'left'}: ${themeSpacer(9, overlap === true ? -1 : 1)};
            `}

            > * {
                margin: ${themeSpacer(3)} 0;
                padding: ${themeSpacer(3)};
                background: ${(p) => (p.overlap === true && themeColor('terminalBackground')(p)) || 'none'};
            }
        }
    }

    .image {
        position: static;
        flex-shrink: 0;
        width: ${SECTION_WIDTH}px;
        min-height: ${SECTION_WIDTH}px;
        margin: ${themeSpacer(6, -1)};
        vertical-align: middle;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: ${({direction}) => (direction === 'right' ? 'left' : 'right')};
        }

        ${mediaMax('sm')} {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            opacity: 0.15;
        }
    }
`;
