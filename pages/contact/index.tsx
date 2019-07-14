import React from 'react';
import {PageComponent} from '../../src/types/PageComponent';
import {ObfuscateText} from '../../src/components/ObfuscateText';
import {ContactForm} from './components/ContactForm';

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
