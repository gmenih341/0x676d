import styled from 'styled-components/macro';
import {SPACER_SMALL, SPACER, COLOR_GRAY, COLOR_WHITE, FONT_SANS} from '../../../constants/style.constants';

export const BaseInput = styled('div')`
    display: block;
    z-index: 10;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    overflow: hidden;
    border: 1px solid ${COLOR_GRAY[4]};
    background: ${COLOR_GRAY[8]};
    color: ${COLOR_WHITE};
    font-family: ${FONT_SANS};
    font-size: 16px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;
