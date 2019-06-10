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

    ${TerminalContent} {
        margin-bottom: ${SPACER}px;
    }
`;

export const Contact: PageComponent = ({children, style}) => {
    return <ContactPage style={style}>{children}</ContactPage>;
};

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
Contact.contentItems = [(props, key) => <ContactForm style={props} key={key} />];
export default Contact;
