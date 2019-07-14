import React, {FunctionComponent, FormEvent} from 'react';
import styled from 'styled-components/macro';
import {mediaMin} from '../../../src/utils/style.utils';
import {ConsoleContent} from '../../../src/components/ConsoleContent.styled';
import {TextInput, FormSelect, TextAreaInput, BaseButton} from '../../../src/components/Form';
import {useForm} from '../../../src/components/Form/hooks/useForm';
import {toQueryString} from '../../../src/utils/url.utils';
import {MailIcon} from '../../../src/components/Footer/icons/MailIcon';
import {COLOR_MAIN, SPACER, SPACER_SMALL, COLOR_WHITE} from '../../../src/constants/style.constants';
import {ClassNameOnly} from '../../../src/types/ClassNameOnly';

interface ContactForm {
    email: string;
    subject: string;
    message: string;
    gdprConfirm: boolean;
    loading: boolean;
}

const subjectOptions: string[] = ['Work opportunity', 'Consulting', 'Just chat', 'Question about your project'];
const ContactFormComponent: FunctionComponent<ClassNameOnly> = ({className, ...props}) => {
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
        <ConsoleContent {...props}>
            <form method="POST" name="contact" onSubmit={onFormSubmit} className={className}>
                <TextInput placeholder="Your email" type="email" name="email" setValue={(value: string) => dispatch('email', value)} />
                <FormSelect
                    name="subject"
                    options={subjectOptions}
                    placeholder="Subject"
                    setValue={(value: string) => dispatch('subject', value)}
                />
                <TextAreaInput
                    placeholder="What do you want to say?"
                    name="content"
                    setValue={(value: string) => dispatch('message', value)}
                />
                <ContactButton type="submit">
                    <MailIcon fill={COLOR_MAIN[5]} width={15} height={15} />
                    Send
                </ContactButton>
            </form>
        </ConsoleContent>
    );
};

export const ContactForm = styled(ContactFormComponent)`
    display: grid;
    position: relative;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: min-content min-content 300px min-content;
    grid-gap: ${SPACER}px;

    ${mediaMin('md')} {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: 1fr 300px;
    }

    ${TextAreaInput} {
        ${mediaMin('md')} {
            grid-column: 1 / -1;
        }
    }
`;

const ContactButton = styled(BaseButton)`
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
