import React, {FormEvent, FunctionComponent, InputHTMLAttributes} from 'react';
import styled from 'styled-components/macro';
import {makeInputComponent} from '../../../components/common/input';
import {COLOR_GRAY} from '../../../style.contants';
import {BaseFormElement} from '../interfaces/base-form-element';

export interface FormTextProps<T> extends BaseFormElement<T> {
    type: InputHTMLAttributes<HTMLInputElement>['type'];
}

const InputWrapper = styled(makeInputComponent('input'))`
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

export const FormText: FunctionComponent<FormTextProps<string>> = React.memo(({placeholder, type, value, setValue, className}) => {
    const onInput = (e: FormEvent<HTMLInputElement>) => setValue && setValue(e.currentTarget.value);
    return <InputWrapper className={className} type={type || 'text'} placeholder={placeholder} value={value} onInput={onInput} />;
});
