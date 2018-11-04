import React from 'react';

import {css} from 'emotion';

const color = css`
    background-color: hotpink;
    &:hover {
        color: ${color};
    }
`;

export function Test () {
    return <h1 className={color}>Hello, World!</h1>;
}
