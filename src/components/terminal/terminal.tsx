import React, {FunctionComponent, HTMLAttributes} from 'react';
import styled from 'styled-components/macro';
import {COLOR_WHITE, FONT_MONO} from '../../style.contants';
import {TerminalContent} from './styled';
import {useFadeInOut} from '../../hooks/useFadeInOut';

interface TerminalProps extends Pick<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
    customContent?: boolean;
    displayName?: string;
}

const TerminalComponent: FunctionComponent<TerminalProps> = React.memo(({children, displayName, className, customContent}) => {
    const transition = useFadeInOut(children, item => displayName || '', -30);

    return (
        <main className={className}>
            {customContent && children}
            {!customContent &&
                transition.map(({key, item, props}) => (
                    <TerminalContent key={key} style={props}>
                        {item}
                    </TerminalContent>
                ))}
        </main>
    );
});

export const Terminal = styled(TerminalComponent)`
    grid-area: terminal;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    background: none;
    color: ${COLOR_WHITE};
    font-family: ${FONT_MONO};
`;

export default Terminal;
