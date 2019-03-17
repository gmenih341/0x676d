import {createGlobalStyle} from 'styled-components';
import {COLOR_WHITE} from '../../style.contants';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        padding: 0;
        margin: 0;
        position: relative;
    }
    body {
        background-color: ${COLOR_WHITE};
    }
`;
