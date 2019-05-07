import {createGlobalStyle} from 'styled-components/macro';
import {COLOR_WHITE} from '../../style.contants';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        position: relative;
        margin: 0;
        padding: 0;
    }
    body {
        background-color: ${COLOR_WHITE};
        text-rendering: optimizeLegibility;
    }
`;
