import styled from '@emotion/styled';
import {CONSOLE_FONT, COLOR_JUNGLE_GREEN, SPACER, COLOR_WHITE} from '../../../styles/variables';

export const ConsoleContent = styled('div')`
    font-family: ${CONSOLE_FONT};
    font-size: 0.9em;
    font-variant-ligatures: common-ligatures;
    background-color: ${COLOR_JUNGLE_GREEN};
    padding: ${SPACER}px;
    color: ${COLOR_WHITE};
    overflow: auto;
    height: 100%;
`;
