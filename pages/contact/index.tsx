import React from 'react';
import styled from 'styled-components/macro';
import {ObfuscateText} from '../../src/components/obfuscate/obfuscate';
import {TerminalContent} from '../../src/components/terminal/styled';
import {PageComponent} from '../../src/interfaces';
import {SPACER} from '../../src/style.contants';
import {ContactForm} from './contact-form';
import {animated} from 'react-spring';

const ContactPage = styled(animated.div)`
    display: block;
    grid-column: 1 / -1;
`;

export const Contact: PageComponent = () => null;

Contact.displayName = 'contact';
Contact.index = 5;
Contact.image = '/static/maribor.jpg';
Contact.headerContent = (
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
Contact.contentItems = [({style, key}) => <ContactForm style={{...style, gridColumn: '1 / -1'}} key={key} />];
export default Contact;
