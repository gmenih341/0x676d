import styled from '@emotion/styled';
import {COLOR_MAIN} from '../../../styles/variables';

export const Text = styled('span')`
    display: block;
    line-height: 1em;
    font-weight: 700;
`;

export const Red = styled('span')`
    color: #ff0000;
`;

export const Blue = styled('span')`
    color: ${COLOR_MAIN[3]};
`;

export const Cursor = styled('span')`
    display: inline-block;
    margin-left: 5px;
    width: 0.5em;
    height: 1.2em;
    vertical-align: bottom;
    border-bottom: 1px solid ${COLOR_MAIN[3]};
    animation: blink 1s linear infinite;

    @keyframes blink {
        0%,
        49%,
        100% {
            background-color: transparent;
        }
        50%,
        99% {
            background-color: ${COLOR_MAIN[3]};
        }
    }
`;
