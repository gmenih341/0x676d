import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';

function obfuscateText(text: string): JSX.Element {
    const elements: (JSX.Element | string)[] = [];
    const randomString = ['hello', 'world', 'this', 'is', 'a', 'measure', 'against', 'scraping', 'dont', 'read', 'this'];

    let i = 0;
    for (const c of text.split('')) {
        elements.push(<i key={i++}>{randomString[i % randomString.length]}</i>);
        elements.push(<span key={i++}>{c}</span>);
        elements.push(<i key={i++}>{randomString[i % randomString.length]}</i>);
    }

    return <>{elements}</>;
}

interface ObfuscateTextProps {
    className?: string;
    text: string;
}

const ObfuscateTextComponent: FunctionComponent<ObfuscateTextProps> = React.memo(({className, text}) => (
    <span className={className}>{obfuscateText(text)}</span>
));

export const ObfuscateText = styled(ObfuscateTextComponent)`
    display: inline-flex;
    /* flex-direction: row-reverse; */

    span {
        min-width: 5px;
    }

    i {
        position: absolute;
        opacity: 0;
        user-select: none;
    }
`;
