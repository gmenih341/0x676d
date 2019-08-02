import styled from 'styled-components/macro';
import {COLOR_GRAY, SPACER_BIG} from '../../../constants/style.constants';

export const ContentContainer = styled('div')`
    position: relative;

    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        z-index: 1000;
        top: -10px;
        width: 50%;
        height: 100%;
        padding: 10px 0;
        background: ${COLOR_GRAY[3]};
    }

    &:before {
        left: 0;
        transform: scaleX(-1) translateX(${SPACER_BIG}px) skewX(-2deg);
        transform-origin: left top;
    }

    &:after {
        right: 0;
        transform: scaleX(-1) translateX(${-SPACER_BIG}px) skewX(2deg);
        transform-origin: right top;
    }
`;
