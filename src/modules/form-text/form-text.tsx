import React, {FunctionComponent} from 'react';
import {makeInputComponent} from '../../components/common/input';

export interface FormTextProps {
    className?: string;
}

const InputWrapper = makeInputComponent('div');

export const FormText: FunctionComponent<FormTextProps> = ({className}) => {
    return (
        <InputWrapper className={className} contentEditable={true}>
            H1llo!
        </InputWrapper>
    );
};
