import React, {HTMLAttributes, FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_WHITE} from '../../style.contants';

interface TerminalProps extends Pick<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
    customContent?: boolean;
    displayName?: string;
    className?: string;
}

const TerminalComponent: FunctionComponent<TerminalProps> = React.memo(({children, className}) => (
    <main className={className}>{children}</main>
));

export const Terminal = styled(TerminalComponent)`
    grid-area: terminal;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    background: none;
    color: ${COLOR_WHITE};
`;

export default Terminal;
