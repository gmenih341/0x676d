import React, {FunctionComponent, FormEvent, useReducer} from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../components/button/button';
import {ObfuscateText} from '../../components/obfuscate/obfuscate';
import {COLOR_GRAY, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import {FormText} from '../form/form-text/form-text';
import {FormSelect} from '../form/form-select/form-select';
import {FormTextArea} from '../form/form-text/form-textarea';
import {toQueryString} from '../../utils/url.utils';

const ContactPage = styled('section')`
    display: block;
`;

const ContactForm = styled('form')`
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: min-content min-content 300px min-content;
    grid-gap: ${SPACER}px;
    margin: ${SPACER_BIG}px 0;

    ${mediaMin('md')} {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: 1fr 300px;
    }
`;

const TextArea = styled(FormTextArea)`
    ${mediaMin('md')} {
        grid-column: 1 / -1;
    }
`;

const MapSection = styled('div')`
    position: relative;
    text-align: center;
    text-shadow: 1px 1px 0 ${COLOR_GRAY[9]}, -1px 1px 0 ${COLOR_GRAY[9]};

    .info {
        margin-bottom: ${SPACER}px;
        padding: ${SPACER_BIG}px 0;
        text-align: center;

        ${mediaMin('md')} {
            display: inline-block;
            width: 250px;
            padding-right: ${SPACER_BIG}px;
            border-right: 1px solid ${COLOR_GRAY[5]};
            text-align: right;
            vertical-align: middle;
        }
    }

    .map {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: url(/static/maribor.png) no-repeat center top;
        background-size: 100% auto;

        ${mediaMin('md')} {
            display: inline-block;
            position: static;
            width: 250px;
            height: 250px;
            margin: 0 auto;
            margin-left: ${SPACER_BIG}px;
            opacity: 1;
            background-size: auto 100%;
            vertical-align: middle;
        }
    }

    h3 {
        margin: 0;
        margin-bottom: ${SPACER}px;
    }
`;

interface ContactForm {
    email: string;
    subject: string;
    message: string;
    gdprConfirm: boolean;
}

const contactFormReducer: Reducer = (state: Partial<ContactForm>, action: ContactForm) => {
    return {
        ...state,
        ...action,
    };
};

export const Contact: FunctionComponent = () => {
    const subjectOptions: string[] = [
        'I want to work with you',
        'I need help with a library you contributed to and stuff',
        'Option 3',
        'Option 4',
        'T',
    ];
    const [state] = useReducer(contactFormReducer, {
        email: 'test@menih.si',
        subject: 'Hello',
        message: 'Hi!',
    });
    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            ...state,
            'form-name': 'contact',
        };

        try {
            const response = await fetch('https://menih.si/contact', {
                method: 'POST',
                mode: 'no-cors',
                body: new URLSearchParams(toQueryString(formData)),
            });

            console.log(response.body);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <ContactPage>
            <MapSection>
                <div className="info">
                    <h3>Gregor Menih</h3>
                    <div>
                        Web developer @<br />
                        Equaleyes Solutions Ltd
                        <br />
                        Maribor, Slovenia
                        <br />
                        <br />
                        <ObfuscateText text="+386 (0)31 336 909" />
                        <br />
                        <ObfuscateText text="gregor@menih.si" />
                    </div>
                </div>
                <div className="map" />
            </MapSection>
            <ContactForm method="POST" name="contact" onSubmit={onFormSubmit}>
                <FormText placeholder="Your email" type="email" name="email" setValue={console.log} />
                <FormSelect name="subject" options={subjectOptions} placeholder="Subject" setValue={console.log} />
                <TextArea placeholder="What do you want to say?" name="content" setValue={console.log} />
                <Button type="submit">Send</Button>
            </ContactForm>
        </ContactPage>
    );
};
