import {createGlobalStyle} from 'styled-components/macro';
import {COLOR_GRAY} from '../constants/style.constants';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #__next {
        position: relative;
        min-height: 100%;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${COLOR_GRAY[3]};
    }

    * {
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
`;
