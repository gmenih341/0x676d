import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {COLOR_BLACK, COLOR_WHITE, SPACER} from '../../style.contants';

const TerminalContainer = styled.main`
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

export const Terminal: FunctionComponent = React.memo(() => {
    return (
        <TerminalContainer>
            <TerminalContent>
                <h1>About me</h1>
                <p>
                    I'm a web developer living in Maribor, Slovenia. My biggest passion is frontend development, which is what I do
                    professionally, but like to explore new languages, and have no fear of diving into lower level programming.
                    <br />
                    Currently, I enjoy working with React the most, but I have a lot of experience in Angular, NestJS and various other
                    buzzword-y frameworks.
                    <br />
                    One of my biggest flaws is, spending more time trying to write bash scripts for tasks, than it takes to actually
                    complete them manually.
                </p>
                <h2>What do I know?</h2>
                <p>
                    Here's a nifty graph, of how good I <em>think</em> I am
                </p>
                If you like what you see, feel free to contact me here, or check out some of my work here.
            </TerminalContent>
        </TerminalContainer>
    );
});
export default Terminal;
