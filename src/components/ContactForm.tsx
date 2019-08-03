import React, {FormEvent, FunctionComponent} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {MailIcon} from './Footer/icons/MailIcon';
import {BaseButton, FormSelect, TextAreaInput, TextInput} from './Form';
import {useForm} from './Form/hooks/useForm';
import {COLOR_BLACK, COLOR_MAIN, COLOR_WHITE, SPACER, SPACER_BIG, SPACER_SMALL} from '../constants/style.constants';
import {ClassNameOnly} from '../types/ClassNameOnly';
import {mediaMin} from '../utils/style.utils';
import {toQueryString} from '../utils/url.utils';

interface ContactForm {
    email: string;
    subject: string;
    message: string;
    gdprConfirm: boolean;
    loading: boolean;
}

const subjectOptions: string[] = ['Work opportunity', 'Consulting', 'Just chat', 'Question about your project'];
const ContactFormComponent: FunctionComponent<ClassNameOnly> = ({...props}) => {
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
        <animated.form method="POST" name="contact" onSubmit={onFormSubmit} {...props}>
            <TextInput placeholder="Your email" type="email" name="email" setValue={(value: string) => dispatch('email', value)} />
            <FormSelect
                name="subject"
                options={subjectOptions}
                placeholder="Subject"
                setValue={(value: string) => dispatch('subject', value)}
            />
            <TextAreaInput placeholder="What do you want to say?" name="content" setValue={(value: string) => dispatch('message', value)} />
            <ContactButton type="submit">
                <MailIcon fill={COLOR_MAIN[5]} width={15} height={15} />
                Shoot me
            </ContactButton>
        </animated.form>
    );
};

export const ContactForm = styled(ContactFormComponent)`
    display: grid;
    position: relative;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: min-content min-content 300px min-content;
    grid-gap: ${SPACER_BIG}px;

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
    padding: ${SPACER}px ${SPACER_BIG * 2}px;
    border: none;
    background: ${COLOR_BLACK};

    ${mediaMin('md')} {
        justify-self: flex-start;
    }

    svg {
        margin-right: ${SPACER_SMALL}px;
    }

    &:hover > svg {
        fill: ${COLOR_WHITE};
    }
`;
