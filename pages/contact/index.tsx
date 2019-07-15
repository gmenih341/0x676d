import React from 'react';
import {PageComponent} from '../../src/types/PageComponent';
import {ObfuscateText} from '../../src/components/ObfuscateText';
import {ContactForm} from './components/ContactForm';
import {SectionTitle} from '../../src/components/SectionTitle.styled';

export const Contact: PageComponent = () => null;

Contact.displayName = 'contact';
Contact.index = 5;
Contact.image = '/static/maribor.jpg';
Contact.headerContent = (
    <>
        <SectionTitle>
            <h2>How to get in</h2>
            <span>wassup</span>
        </SectionTitle>
        <p>
            Full-stack web developer
            <br />
            @ Equaleyes Solutions Ltd
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
