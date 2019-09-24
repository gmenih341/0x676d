import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_SANS} from '../../../constants/style.constants';

export const ContactButton = styled('button')`
    position: relative;
    width: 375px;
    height: 50px;
    margin-left: auto;
    border: none;
    background: none;
    color: ${COLOR_MAIN[0]};
    font-family: ${FONT_SANS};
    font-size: 24px;
    font-weight: 600;
    line-height: 50px;
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
