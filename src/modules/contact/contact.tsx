import React, {FormEvent, FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../components/button/button';
import {ImageDivisor} from '../../components/image-divisor/image-divisor';
import {MailIcon} from '../../components/icons/mail.icon';
import {ObfuscateText} from '../../components/obfuscate/obfuscate';
import {COLOR_MAIN, COLOR_WHITE, SPACER, SPACER_BIG, SPACER_SMALL} from '../../style.contants';
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
            <ImageDivisor imageSrc="/static/maribor.jpg">
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
            </ImageDivisor>
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
