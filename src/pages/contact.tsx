import React from 'react';
import {ObfuscateText} from '../components/ObfuscateText';
import {SectionTitle} from '../components/SectionTitle.styled';
import {SideImage} from '../components/SideImage';
import {PageComponent} from '../types/PageComponent';
import {ContactForm} from '../components/ContactForm';
import {ExternalLink} from '../components/ExternalLink';
import {LINKEDIN_URL} from '../constants/social.constants';
import {ImageSet, MimeType} from '../types/ImageMime';

const contactPageImages: ImageSet = {
    [MimeType.PNG]: '/maribor.png',
    [MimeType.WEBP]: '/maribor.webp',
};

export const Contact: PageComponent = ({style}) => <ContactForm style={style} />;

Contact.displayName = 'contact';
Contact.index = 2;
Contact.headerComponent = ({imageStyle, contentStyle, style}) => {
    return (
        <SideImage
            overlap={true}
            alt="Contact page cover"
            imageSet={contactPageImages}
            imageStyle={imageStyle}
            contentStyle={contentStyle}
            style={style}>
            <SectionTitle>
                <h2>Contact</h2>
                <span>get in touch with me</span>
            </SectionTitle>
            <p>
                The best way to contact me is to use the form below. However, if you prefer to just write me an email, or use other means of
                communication, you can use one of the methods below.
                <br />
                <br />
                <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>
                <br />
                <ExternalLink href={LINKEDIN_URL}>gregor@menih.si</ExternalLink>
            </p>
        </SideImage>
    );
};

export default Contact;
