import React from 'react';
import {css, Global} from '@emotion/core';
import {COLOR_WHITE} from '../../style.contants';

const globalStyle = css`
    html,
    body,
    #root {
        padding: 0;
        margin: 0;
        position: relative;
    }
    #root {
        background-color: ${COLOR_WHITE};
    }
`;

export const GlobalStyle = () => <Global styles={globalStyle} />;
