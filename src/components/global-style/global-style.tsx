import {createGlobalStyle} from 'styled-components/macro';
import {COLOR_GRAY} from '../../style.contants';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #__next {
        position: relative;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: ${COLOR_GRAY[1]};
        text-rendering: optimizeLegibility;
    }

    * {
        box-sizing: border-box;
    }
`;
