import React, {FormEvent, FunctionComponent} from 'react';
import {animated} from 'react-spring';
import styled, {CSSProperties} from 'styled-components/macro';
import {COLOR_MAIN, SPACER_BIG} from '../../../constants/style.constants';
import {useToggle} from '../../../hooks/useToggle';
import {ClassNameOnly} from '../../../types/ClassNameOnly';
import {mediaMin} from '../../../utils/style.utils';
import {toQueryString} from '../../../utils/url.utils';
import {TextAreaInput, TextInput} from '../../Form';
import {useForm} from '../../Form/hooks/useForm';
import {JobPointerIcon} from '../../WorkExperience/icons/JobPointerIcon';
import {ContactButton} from './ContactButton.styled';

interface ContactForm {
    email: string;
    name: string;
    message: string;
    loading: boolean;
}

interface ContactFormProps extends ClassNameOnly {
    style?: CSSProperties;
}

const ContactFormComponent: FunctionComponent<ContactFormProps> = ({...props}) => {
    const [show, setShow] = useToggle(false);
    const [formState, dispatch] = useForm<ContactForm, keyof ContactForm>({
        email: '',
        name: '',
        message: '',
        loading: false,
    });
    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {loading: _, ...restState} = formState;

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
        <animated.form method="POST" name="contact" onSubmit={onFormSubmit} {...props} data-netlify={true}>
            <TextInput placeholder="Name" type="text" setValue={(value: string) => dispatch('name', value)} />
            <TextInput placeholder="Email" type="email" setValue={(value: string) => dispatch('email', value)} />
            <TextAreaInput placeholder="Message" setValue={(value: string) => dispatch('message', value)} />
            <ContactButton type="submit" onMouseEnter={() => !show && setShow(true)}>
                Send
                <JobPointerIcon width={300} height={50} fill={COLOR_MAIN[6]} />
            </ContactButton>

            {/* Hack so netlify acknoledges all forms (contendEditable doesn't work) */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="email" />
            <input type="hidden" name="name" />
            <input type="hidden" name="message" />
        </animated.form>
    );
};

export const ContactForm = styled(ContactFormComponent)`
    display: grid;
    position: relative;
    grid-template-rows: min-content max-content 300px min-content;
    grid-gap: ${SPACER_BIG}px;

    ${mediaMin('md')} {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: 1fr max-content min-content;
    }

    ${TextAreaInput} {
        min-height: 300px;
        padding-bottom: 30px;
        ${mediaMin('md')} {
            grid-column: 1 / -1;
            grid-row: 2 / 4;
        }
    }

    ${ContactButton} {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
        z-index: 100;
        margin-right: ${SPACER_BIG}px;
        transform: translateY(50%);
    }
`;
