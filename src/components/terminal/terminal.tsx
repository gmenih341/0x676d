import styled from 'styled-components/macro';
import React, {FunctionComponent, HTMLAttributes} from 'react';
import {COLOR_BLACK, COLOR_WHITE, SPACER, FONT_MONO} from '../../style.contants';
import {animated} from 'react-spring';

const TerminalContainer = styled(animated.main)`
    grid-area: terminal;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    font-family: ${FONT_MONO};
`;

const TerminalContent = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: ${SPACER}px;
`;

export const Terminal: FunctionComponent<Pick<HTMLAttributes<HTMLDivElement>, 'style'>> = React.memo(({children, style}) => {
    return (
        <TerminalContainer style={style}>
            <TerminalContent>{children}</TerminalContent>
        </TerminalContainer>
    );
});

export default Terminal;
