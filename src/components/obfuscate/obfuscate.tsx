import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

interface ObfuscateTextProps {
    text: string;
}

const Obfuscated = styled('span')`
    i {
        display: none;
    }
`;

function obfuscateText(text: string): JSX.Element {
    const elements: (JSX.Element | string)[] = [];
    const randomString = ['hello', 'world', 'this', 'is', 'a', 'measure', 'against', 'scraping', 'dont', 'read', 'this'];

    let i = 0;
    for (const c of [...text]) {
        elements.push(<i key={i++}>{randomString[i % randomString.length]}</i>);
        elements.push(c);
        elements.push(<i key={i++}>{randomString[i % randomString.length]}</i>);
    }

    return <>{elements}</>;
}

export const ObfuscateText: FunctionComponent<ObfuscateTextProps> = React.memo(({text}) => {
    return <Obfuscated>{obfuscateText(text)}</Obfuscated>;
});