import styled from '@emotion/styled';
import {COLOR_MAIN, SPACER_SMALL} from '../../../styles/variables';

export const Text = styled('span')`
    display: block;
    line-height: 1em;
    /* font-weight: 700; */
`;

export const Red = styled('span')`
    color: #ff530d;
`;

export const Blue = styled('span')`
    color: ${COLOR_MAIN[4]};
`;

export const Cursor = styled('span')`
    display: inline-block;
    margin-left: 5px;
    width: 0.5em;
    height: 1.2em;
    vertical-align: bottom;
    animation: blink 1.2s linear infinite;

    @keyframes blink {
        0%,
        49%,
        100% {
            background-color: transparent;
        }
        50%,
        99% {
            background-color: ${COLOR_MAIN[4]};
        }
    }
`;

export const Command = styled('span')`
    margin-left: ${SPACER_SMALL}px;
    font-weight: normal;
`;
