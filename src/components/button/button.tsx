import React, {FunctionComponent, HTMLAttributes} from 'react';
import styled from 'styled-components';
import {FONT_SANS, COLOR_MAIN, SPACER, SPACER_SMALL, COLOR_WHITE, COLOR_GRAY} from '../../style.contants';

const StyledButton = styled('button')`
    grid-column: 2 / -1;
    justify-self: end;
    padding: ${SPACER_SMALL * 2}px ${SPACER * 2}px;
    border: 1px solid ${COLOR_MAIN[8]};
    box-shadow: 2px 2px 0 ${COLOR_MAIN[9]}, -2px 2px 0 ${COLOR_MAIN[9]}, 1px 1px ${COLOR_MAIN[6]} inset, -1px 1px ${COLOR_MAIN[6]} inset;
    background: ${COLOR_MAIN[7]};
    color: ${COLOR_MAIN[1]};
    font-family: ${FONT_SANS};
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Button: FunctionComponent<HTMLAttributes<HTMLButtonElement>> = ({children}) => {
    return <StyledButton type="button">{children}</StyledButton>;
};