import React, {FormEvent, FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../src/components/button/button';
import {MailIcon} from '../../src/components/icons/mail.icon';
import {ImageDivisor} from '../../src/components/image-divisor/image-divisor';
import {ObfuscateText} from '../../src/components/obfuscate/obfuscate';
import {TerminalContent} from '../../src/components/terminal/styled';
import {FormSelect} from '../../src/modules/form/form-select/form-select';
import {FormText} from '../../src/modules/form/form-text/form-text';
import {FormTextArea} from '../../src/modules/form/form-text/form-textarea';
import {useForm} from '../../src/modules/form/hooks/useForm';
import {COLOR_MAIN, COLOR_WHITE, SPACER, SPACER_SMALL} from '../../src/style.contants';
import {mediaMin} from '../../src/utils/style.utils';
import {toQueryString} from '../../src/utils/url.utils';
import {useFadeInOut} from '../../src/hooks/useFadeInOut';

const ContactPage = styled('section')`
    display: block;

    ${TerminalContent} {
        margin-bottom: ${SPACER}px;
    }
`;

const ContactForm = styled('form')`
    display: grid;
    position: relative;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: min-content min-content 300px min-content;
    grid-gap: ${SPACER}px;

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
    const contactTransition = useFadeInOut(1, null, -10);
    const formTransition = useFadeInOut(2, null, -30);
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
            {contactTransition.map(({props}) => (
                <TerminalContent key={1} style={props}>
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
                </TerminalContent>
            ))}
            {formTransition.map(({props}) => (
                <TerminalContent key={2} style={props}>
                    <ContactForm method="POST" name="contact" onSubmit={onFormSubmit}>
                        <FormText
                            placeholder="Your email"
                            type="email"
                            name="email"
                            setValue={(value: string) => dispatch('email', value)}
                        />
                        <FormSelect
                            name="subject"
                            options={subjectOptions}
                            placeholder="Subject"
                            setValue={(value: string) => dispatch('subject', value)}
                        />
                        <TextArea
                            placeholder="What do you want to say?"
                            name="content"
                            setValue={(value: string) => dispatch('message', value)}
                        />
                        <ContactButton type="submit">
                            <MailIcon fill={COLOR_MAIN[5]} width={15} height={15} />
                            Send
                        </ContactButton>
                    </ContactForm>
                </TerminalContent>
            ))}
        </ContactPage>
    );
};

Contact.displayName = 'contact';
Contact.customContent = true;

export default Contact;
