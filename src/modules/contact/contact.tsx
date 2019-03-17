import styled from 'styled-components/macro';
import React, {FunctionComponent} from 'react';
import {FormSelect} from '../form-select/form-select';
import {FormText} from '../form-text/form-text';
import {SPACER} from '../../style.contants';

const ContactPage = styled('section')`
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    grid-gap: ${SPACER}px;
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
            <FormText />
            <FormSelect name="subject" options={subjectOptions} placeholder="Subject" />
            <TextArea />
        </ContactPage>
    );
};
