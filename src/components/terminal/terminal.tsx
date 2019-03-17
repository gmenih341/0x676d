import styled from 'styled-components/macro';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, COLOR_WHITE, SPACER} from '../../style.contants';

const TerminalContainer = styled('main')`
    position: relative;
    grid-area: terminal;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    font-family: 'Fira Mono', 'Courier New', Courier, monospace;
`;

const TerminalContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: ${SPACER}px;
`;

export const Terminal: FunctionComponent = React.memo(({children}) => {
    return (
        <TerminalContainer>
            <TerminalContent>{children}</TerminalContent>
        </TerminalContainer>
    );
});
export default Terminal;
