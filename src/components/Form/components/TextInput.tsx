import React, {FormEvent, FunctionComponent, InputHTMLAttributes} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY} from '../../../constants/style.constants';
import {BaseFormElement} from '../types/BaseFormElement';
import {BaseInput} from './BaseInput.styled';

export interface FormTextProps<T> extends BaseFormElement<T>, Pick<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const TextInputComponent: FunctionComponent<FormTextProps<string>> = React.memo(({value, setValue, ...props}) => {
    const onInput = (e: FormEvent<HTMLInputElement>) => setValue && setValue(e.currentTarget.value);
    return <BaseInput {...props} value={value} onInput={onInput} minLength={5} required={true} as="input" />;
});

export const TextInput = styled(TextInputComponent)`
    &::-webkit-input-placeholder {
        color: ${COLOR_GRAY[5]};
    }
    &::-moz-placeholder {
        color: ${COLOR_GRAY[5]};
    }
    &:-ms-input-placeholder {
        color: ${COLOR_GRAY[5]};
    }
    &:-moz-placeholder {
        color: ${COLOR_GRAY[5]};
    }
`;
