import React from 'react';
import {ObfuscateText} from '../components/ObfuscateText';
import {SectionTitle} from '../components/SectionTitle.styled';
import {SideImage} from '../components/SideImage';
import {PageComponent} from '../types/PageComponent';
import {ContactForm} from '../components/ContactForm';
import {ExternalLink} from '../components/ExternalLink';
import {LINKEDIN_URL} from '../constants/social.constants';

export const Contact: PageComponent = ({style}) => <ContactForm style={style} />;

Contact.displayName = 'contact';
Contact.index = 2;
Contact.headerComponent = ({imageStyle, contentStyle, style}) => {
    return (
        <SideImage overlap={true} imageSrc="/static/maribor.png" imageStyle={imageStyle} contentStyle={contentStyle} style={style}>
            <SectionTitle>
                <h2>Contact</h2>
                <span>get in touch with me</span>
            </SectionTitle>
            <p>The quickest way to get me is the form below. If you prefer, you can contact me via:</p>
            <p>
                <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>
                <br />
                <ExternalLink href={LINKEDIN_URL}>gregor@menih.si</ExternalLink>
                <br />
                <ObfuscateText>+386 31 336 909</ObfuscateText>
            </p>
        </SideImage>
    );
};

export default Contact;
