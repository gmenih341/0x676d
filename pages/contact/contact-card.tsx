import React from 'react';
import {TerminalContent} from '../../src/components/terminal/styled';
import {ImageDivisor} from '../../src/components/image-divisor/image-divisor';
import {ObfuscateText} from '../../src/components/obfuscate/obfuscate';

export const ContactCard = props => (
    <TerminalContent {...props}>
        <ImageDivisor imageSrc="/static/maribor.jpg">
            <h3>Gregor Menih</h3>
            <p>
                Web developer
                <br />
                Equaleyes Solutions Ltd
                <br />
                Maribor, Slovenia
            </p>
            <p>
                <ObfuscateText text="+386 31 336 909" />
                <br />
                <ObfuscateText text="hello@menih.si" />
            </p>
        </ImageDivisor>
    </TerminalContent>
);
