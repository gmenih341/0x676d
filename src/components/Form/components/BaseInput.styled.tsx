import styled from 'styled-components/macro';
import {COLOR_BLACK, COLOR_GRAY, COLOR_MAIN, COLOR_WHITE, FONT_SANS, SPACER} from '../../../constants/style.constants';
import {boxShadow, boxShadowFocused} from '../../../utils/style.utils';

export const BaseInput = styled('input')`
    display: block;
    z-index: 10;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: ${SPACER}px;
    border: none;
    box-shadow: ${boxShadow(COLOR_BLACK)};
    background: ${COLOR_GRAY[8]};
    color: ${COLOR_WHITE};
    font-family: ${FONT_SANS};
    font-size: 16px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:focus,
    &:active {
        outline: none;
        box-shadow: ${boxShadowFocused(COLOR_MAIN[7])};
    }

    &:invalid {
        box-shadow: ${boxShadowFocused('#ff0000')};
    }

    &:valid {
        box-shadow: ${boxShadowFocused('#00ff00')};
    }
`;
