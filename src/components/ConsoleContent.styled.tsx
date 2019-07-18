import styled from 'styled-components/macro';
import {SPACER, COLOR_BLACK, COLOR_WHITE, FONT_SANS, COLOR_GRAY, SPACER_SMALL} from '../constants/style.constants';
import {animated} from 'react-spring';
import {opaque, boxShadow} from '../utils/style.utils';

export const ConsoleContent = styled(animated.div)`
    position: relative;
    box-sizing: border-box;
    align-self: flex-start;
    width: 100%;
    padding: ${SPACER}px;
    overflow: hidden;
    box-shadow: ${boxShadow(COLOR_BLACK)};
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    font-family: ${FONT_SANS};

    line-height: 1.5;

    p,
    span {
        color: ${COLOR_GRAY[1]};
        letter-spacing: 1px;
    }

    code {
        padding: ${SPACER_SMALL / 2}px;
        border-radius: 3px;
        background: ${opaque(COLOR_GRAY[9], 0.5)};
        font-size: 13px;
    }

    a {
        color: inherit;
    }
`;
