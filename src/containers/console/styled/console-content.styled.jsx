import styled from '@emotion/styled';
import {SPACER, COLOR_WHITE, COLOR_BLACK} from '../../../styles/variables';

const CONSOLE_FONT = '"Fira Code", "Courier New", Courier, monospace';

export const ConsoleContent = styled('div')`
    font-family: ${CONSOLE_FONT};
    font-size: 0.9em;
    font-variant-ligatures: common-ligatures;
    background-color: ${COLOR_BLACK};
    padding: ${SPACER}px;
    color: ${COLOR_WHITE};
    overflow: auto;
    height: 100%;
`;
