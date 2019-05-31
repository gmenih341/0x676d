import React from 'react';
import styled from 'styled-components/macro';
import {TerminalContent} from '../../src/components/terminal/styled';
import {PageComponent} from '../../src/interfaces';
import {SPACER} from '../../src/style.contants';
import {ContactCard} from './contact-card';
import {ContactForm} from './contact-form';

const ContactPage = styled('section')`
    display: block;

    ${TerminalContent} {
        margin-bottom: ${SPACER}px;
    }
`;

export const Contact: PageComponent = () => {
    return (
        <ContactPage>
            <ContactCard />
            <ContactForm />
        </ContactPage>
    );
};

Contact.displayName = 'contact';
Contact.customContent = true;

export default Contact;
