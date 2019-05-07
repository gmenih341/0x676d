import React, {FunctionComponent, HTMLAttributes} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {COLOR_BLACK, COLOR_WHITE, FONT_MONO} from '../../style.contants';
import {TerminalContent} from './styled';

type TerminalProps = Pick<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>;

const TerminalComponent: FunctionComponent<TerminalProps> = React.memo(({children, className, style}) => {
    return (
        <animated.main className={className} style={style}>
            <TerminalContent>{children}</TerminalContent>
        </animated.main>
    );
});

export const Terminal = styled(TerminalComponent)`
    grid-area: terminal;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    font-family: ${FONT_MONO};
`;

export default Terminal;
