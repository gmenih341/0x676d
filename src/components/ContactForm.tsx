import React, {FormEvent, FunctionComponent} from 'react';
import {animated} from 'react-spring';
import styled, {CSSProperties} from 'styled-components/macro';
import {COLOR_BLACK, COLOR_WHITE, SPACER, SPACER_BIG, SPACER_SMALL, COLOR_MAIN} from '../constants/style.constants';
import {ClassNameOnly} from '../types/ClassNameOnly';
import {mediaMin} from '../utils/style.utils';
import {toQueryString} from '../utils/url.utils';
import {BaseButton, TextAreaInput, TextInput} from './Form';
import {useForm} from './Form/hooks/useForm';
import {MailIcon} from './Footer/icons/MailIcon';

interface ContactForm {
    email: string;
    subject: string;
    message: string;
    gdprConfirm: boolean;
    loading: boolean;
}

interface ContactFormProps extends ClassNameOnly {
    style?: CSSProperties;
}

const subjectOptions: string[] = ['Work opportunity', 'Consulting', 'Just chat', 'Question about your project'];
const ContactFormComponent: FunctionComponent<ContactFormProps> = ({...props}) => {
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
            await fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: toQueryString(formData),
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <animated.form method="POST" name="contact" onSubmit={onFormSubmit} {...props}>
            <TextInput
                placeholder="Where can I get you?"
                type="email"
                name="email"
                setValue={(value: string) => dispatch('email', value)}
            />
            <TextInput placeholder="Your topic" type="text" name="text" setValue={(value: string) => dispatch('subject', value)} />
            <TextAreaInput placeholder="What do you want to say?" name="content" setValue={(value: string) => dispatch('message', value)} />
            <ContactButton type="submit">EN QU IR E</ContactButton>
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
    width: auto;
    margin-left: auto;
    padding: ${SPACER}px ${SPACER_BIG * 2}px;
    background: ${COLOR_BLACK};
    font-size: 24px;
    line-height: 1;
    text-transform: uppercase;

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
