import React from 'react';
import styled from 'styled-components/macro';
import {TerminalContent} from '../../src/components/terminal/styled';
import {PageComponent} from '../../src/interfaces';
import {SPACER} from '../../src/style.contants';
import {ContactForm} from './contact-form';
import {ImageDivisor} from '../../src/components/image-divisor/image-divisor';
import {ObfuscateText} from '../../src/components/obfuscate/obfuscate';

const ContactPage = styled('section')`
    display: block;

    ${TerminalContent} {
        margin-bottom: ${SPACER}px;
    }
`;

export const Contact: PageComponent = () => {
    return (
        <ContactPage>
            <ContactForm />
        </ContactPage>
    );
};

Contact.displayName = 'contact';
Contact.index = 5;
Contact.customContent = true;
Contact.image = '/static/maribor.jpg';
Contact.children = (
    <>
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
    </>
);

export default Contact;
