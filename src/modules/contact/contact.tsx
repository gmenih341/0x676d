import styled from '@emotion/styled';
import React, {FunctionComponent} from 'react';
import {FormSelect} from '../form-select/form-select';

const ContactPage = styled('section')`
    width: 300px;
`;

export const Contact: FunctionComponent = () => {
    const subjectOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
    return (
        <ContactPage>
            <FormSelect name="subject" options={subjectOptions} placeholder="Subject" />
            {/* <TextInput multiline={true} />
                <Button type="submit">Send</Button> */}
        </ContactPage>
    );
};
