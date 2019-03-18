import styled from 'styled-components/macro';
import React, {FunctionComponent} from 'react';
import {FormSelect} from '../form-select/form-select';
import {FormText} from '../form-text/form-text';
import {SPACER} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

const ContactPage = styled('section')`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${SPACER}px;

    ${mediaMin(ScreenSize.MD)} {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }
`;

const TextArea = styled(FormText)`
    grid-column: 1 / -1;
    height: 300px;
`;

export const Contact: FunctionComponent = () => {
    const subjectOptions: string[] = [
        'I want to work with you',
        'I need help with a library you contributed to and stuff',
        'Option 3',
        'Option 4',
        'T',
    ];
    return (
        <ContactPage>
            <FormText placeholder="Email" />
            <FormSelect name="subject" options={subjectOptions} placeholder="Subject" />
            <TextArea placeholder="What do you want to say?" />
        </ContactPage>
    );
};
