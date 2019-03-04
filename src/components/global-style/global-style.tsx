import {css, Global} from '@emotion/core';
import React from 'react';
import {COLOR_WHITE} from '../../style.contants';

const globalStyle = css`
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

export const GlobalStyle = () => <Global styles={globalStyle} />;
