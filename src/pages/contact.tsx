import React, {FunctionComponent} from 'react';
import {ContactForm} from '../components/ContactForm';
import {ExternalLink} from '../components/ExternalLink';
import {SectionTitle} from '../components/SectionTitle.styled';
import {SideImage} from '../components/SideImage';
import {useSocial} from '../queries/useSocial';
import {ImageSet, MimeType} from '../types/ImageMime';
import {ContentComponentProps, HeaderComponentProps, PageComponent} from '../types/PageComponent';

const contactPageImages: ImageSet = {
    [MimeType.PNG]: '/images/maribor.png',
    [MimeType.WEBP]: '/images/maribor.webp',
};

const HeaderComponent: FunctionComponent<HeaderComponentProps> = ({imageStyle, contentStyle, style}) => {
    const social = useSocial();

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
                <ExternalLink href={`https://linkedin.com/in/${social.linkedIn}`}>LinkedIn</ExternalLink>
                <br />
                <ExternalLink href={`mailto:${social.email}`}>{social.email}</ExternalLink>
            </p>
        </SideImage>
    );
};

const ContentComponent: FunctionComponent<ContentComponentProps> = ({style}) => <ContactForm style={style} />;

const ContactPage: PageComponent = {
    HeaderComponent,
    ContentComponent,
};

export default ContactPage;
