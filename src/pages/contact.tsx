import React from 'react';
import {ObfuscateText} from '../components/ObfuscateText';
import {SectionTitle} from '../components/SectionTitle.styled';
import {SideImage} from '../components/SideImage';
import {PageComponent} from '../types/PageComponent';
import {ContactForm} from '../components/ContactForm';

export const Contact: PageComponent = () => <ContactForm />;

Contact.displayName = 'contact';
Contact.headerComponent = ({imageStyle, contentStyle, style}) => {
    return (
        <SideImage overlap={true} imageSrc="/static/maribor.png" imageStyle={imageStyle} contentStyle={contentStyle} style={style}>
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
        </SideImage>
    );
};

export default Contact;
