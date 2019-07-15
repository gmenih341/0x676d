import styled from 'styled-components/macro';
import {SPACER, COLOR_BLACK, COLOR_WHITE, FONT_SANS} from '../constants/style.constants';
import {animated} from 'react-spring';

export const ConsoleContent = styled(animated.div)`
    position: relative;
    box-sizing: border-box;
    align-self: flex-start;
    width: 100%;
    padding: ${SPACER}px;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    font-family: ${FONT_SANS};
    line-height: 1.5;

    a {
        color: inherit;
    }
`;
