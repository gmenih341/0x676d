import styled from 'styled-components/macro';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {SPACER, SPACER_BIG, SPACER_SMALL, COLOR_BLACK, FONT_SANS, COLOR_MAIN, COLOR_GRAY} from '../../style.contants';

export const TRANSITION = '250ms ease';

export const MenuItems = styled('div')`
    display: block;
    box-sizing: border-box;
    align-self: center;
    text-align: right;
    white-space: nowrap;

    ${mediaMax('md')} {
        visibility: hidden;
        z-index: 1000;
        min-height: 100%;
        padding: ${SPACER}px ${SPACER_BIG}px;
        transform: translateY(-50px);
        transition: transform ${TRANSITION}, opacity ${TRANSITION}, visibility ${TRANSITION};
        opacity: 0;
        text-align: center;

        &.active {
            visibility: inherit;
            transform: translateY(-15px);
            opacity: 1;
        }
    }
`;

export const MobileTitle = styled('h2')`
    display: none;

    ${mediaMax('md')} {
        display: block;
        margin: 0;
        margin-bottom: ${SPACER}px;
    }
`;

export const Anchor = styled('a')`
    display: block;
    position: relative;
    margin: ${SPACER}px 0;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    color: ${COLOR_BLACK};
    font-family: ${FONT_SANS};
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;
    text-decoration: none;

    &:first-of-type {
        margin: 0 !important;
    }

    ${mediaMin('md')} {
        display: inline-block;
        margin: 0 0 0 ${SPACER_SMALL}px;
    }

    ${mediaMin('lg')} {
        margin: 0 0 0 ${SPACER}px;
    }

    strong,
    span {
        display: inline-block;
        transition: opacity 300ms, visibility 300ms;
    }

    strong {
        visibility: hidden;
        position: absolute;
        left: 0;
        width: 100%;
        opacity: 0;
        font-weight: 600;
        text-align: center;
    }

    &.active {
        color: ${COLOR_MAIN[6]};

        strong {
            visibility: inherit;
            opacity: 1;
        }
        span {
            visibility: hidden;
            opacity: 0;
        }
    }
`;
