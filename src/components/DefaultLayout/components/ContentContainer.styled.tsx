import styled from 'styled-components/macro';
import {COLOR_GRAY, SPACER_BIG, SPACER} from '../../../constants/style.constants';

export const ContentContainer = styled('div')`
    position: relative;
    margin: ${-SPACER_BIG * 2}px;
    padding: ${SPACER_BIG * 2}px;
    overflow: hidden;

    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        z-index: 1000;
        top: ${SPACER_BIG}px;
        width: ${SPACER_BIG * 2}px;
        height: 100%;
        transform: rotate(2deg);
        background: ${COLOR_GRAY[3]};
    }

    &:before {
        left: ${-SPACER}px;
        transform-origin: top right;
    }

    &:after {
        right: ${-SPACER}px;
        transform-origin: bottom left;
    }
`;
