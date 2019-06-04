import styled from 'styled-components/macro';
import {SPACER, COLOR_BLACK} from '../../style.contants';
import {animated} from 'react-spring';

export const TerminalContent = styled(animated.div)`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: ${SPACER}px;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: ${COLOR_BLACK};

    a {
        color: inherit;
    }
`;
