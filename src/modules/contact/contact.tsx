import styled from 'styled-components/macro';
import React, {FunctionComponent} from 'react';
import {FormSelect} from '../form-select/form-select';

const ContactPage = styled('section')`
    width: 300px;
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
            <FormSelect name="subject" options={subjectOptions} placeholder="Subject" />
            {/* <TextInput multiline={true} />
                <Button type="submit">Send</Button> */}
        </ContactPage>
    );
};
