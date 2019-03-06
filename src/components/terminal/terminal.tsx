import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, COLOR_WHITE, SPACER} from '../../style.contants';

const TerminalContainer = styled('main')`
    position: relative;
    width: 100%;
    grid-area: terminal;
    font-family: 'Fira Mono', 'Courier New', Courier, monospace;
    box-sizing: border-box;
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const TerminalContent = styled.div`
    padding: ${SPACER}px;
    width: 100%;
    box-sizing: border-box;
`;

export const Terminal: FunctionComponent = React.memo(({children}) => {
    return (
        <TerminalContainer>
            <TerminalContent>{children}</TerminalContent>
        </TerminalContainer>
    );
});
export default Terminal;
