import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_TEXT, SPACER, SPACER_BIG} from '../../../constants/style.constants';

export const ContactButton = styled('button')`
    position: relative;
    width: 400px;
    height: 60px;
    margin-left: auto;
    padding: ${SPACER}px ${SPACER_BIG}px;
    border: none;
    background: none;
    color: ${COLOR_MAIN[0]};
    font-family: ${FONT_TEXT};
    font-size: 24px;
    line-height: 1.4;
    text-transform: uppercase;
    cursor: pointer;

    svg {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        line-height: 1;
    }

    &:hover {
        opacity: 1;
    }
`;
