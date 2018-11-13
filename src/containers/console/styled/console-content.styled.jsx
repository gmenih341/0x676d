import styled from '@emotion/styled';
import {SPACER, COLOR_WHITE} from '../../../styles/variables';

const CONSOLE_FONT = '"Fira Code", "Courier New", Courier, monospace';

export const ConsoleContent = styled('pre')`
    font-family: ${CONSOLE_FONT};
    font-size: 0.9em;
    font-variant-ligatures: common-ligatures;
    padding: ${SPACER}px;
    color: ${COLOR_WHITE};
    overflow: auto;
    height: 100%;
    white-space: pre-wrap;
    perspective: 500px;
`;
