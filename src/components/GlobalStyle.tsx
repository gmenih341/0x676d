import {createGlobalStyle} from 'styled-components/macro';
import {themeColor} from '../utils/theme.utils';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #__gatsby {
        position: relative;
        min-height: 100%;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${themeColor('pageBackground')};
    }

    * {
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
`;
