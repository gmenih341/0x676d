import React, {FormEvent, FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../components/button/button';
import {MailIcon} from '../../components/icons/mail.icon';
import {ObfuscateText} from '../../components/obfuscate/obfuscate';
import {COLOR_GRAY, COLOR_MAIN, COLOR_WHITE, SPACER, SPACER_BIG, SPACER_SMALL} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import {toQueryString} from '../../utils/url.utils';
import {FormSelect} from '../form/form-select/form-select';
import {FormText} from '../form/form-text/form-text';
import {FormTextArea} from '../form/form-text/form-textarea';
import {useForm} from '../form/hooks/useForm';

const ContactPage = styled('section')`
    display: block;
`;

const ContactForm = styled('form')`
    display: grid;
    position: relative;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: min-content min-content 300px min-content;
    grid-gap: ${SPACER}px;
    margin: ${SPACER_BIG}px 0;

    ${mediaMin('md')} {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: 1fr 300px;
    }
`;

const ContactButton = styled(Button)`
    grid-column: 1 / -1;

    ${mediaMin('md')} {
        justify-self: flex-end;
    }

    svg {
        margin-right: ${SPACER_SMALL}px;
    }

    &:hover > svg {
        fill: ${COLOR_WHITE};
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
    loading: boolean;
}

const subjectOptions: string[] = ['Work opportunity', 'Consulting', 'Just chat', 'Question about your project'];

export const Contact: FunctionComponent = () => {
    const [formState, dispatch] = useForm<ContactForm, keyof ContactForm>({
        email: '',
        subject: '',
        message: '',
        gdprConfirm: false,
        loading: false,
    });
    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {loading: _1, ...restState} = formState;

        dispatch('loading', true);

        const formData = {
            'form-name': 'contact',
            ...restState,
        };

        try {
            await fetch('/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www--urlencoded'},
                body: toQueryString(formData),
            });
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
                        Web developer
                        <br />
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
                <FormText placeholder="Your email" type="email" name="email" setValue={(value: string) => dispatch('email', value)} />
                <FormSelect
                    name="subject"
                    options={subjectOptions}
                    placeholder="Subject"
                    setValue={(value: string) => dispatch('subject', value)}
                />
                <TextArea placeholder="What do you want to say?" name="content" setValue={(value: string) => dispatch('message', value)} />
                <ContactButton type="submit">
                    <MailIcon fill={COLOR_MAIN[5]} width={15} height={15} />
                    Send
                </ContactButton>
            </ContactForm>
        </ContactPage>
    );
};
