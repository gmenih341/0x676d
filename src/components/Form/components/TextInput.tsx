import React, {FormEvent, FunctionComponent, InputHTMLAttributes} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY} from '../../../constants/style.constants';
import {BaseFormElement} from '../types/BaseFormElement';
import {BaseInput} from './BaseInput.styled';

export interface FormTextProps<T> extends BaseFormElement<T>, Pick<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

export const TextInputComponent: FunctionComponent<FormTextProps<string>> = React.memo(
    ({placeholder, type, value, setValue, className}) => {
        const onInput = (e: FormEvent<HTMLInputElement>) => setValue && setValue(e.currentTarget.value);
        return (
            <BaseInput
                className={className}
                type={type || 'text'}
                placeholder={placeholder}
                value={value}
                onInput={onInput}
                minLength={5}
                required={true}
            />
        );
    },
);

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
