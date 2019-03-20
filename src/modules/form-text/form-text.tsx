import React, {FunctionComponent, HTMLAttributes, InputHTMLAttributes} from 'react';
import {makeInputComponent} from '../../components/common/input';
import styled from 'styled-components';
import {COLOR_GRAY} from '../../style.contants';

export interface FormTextProps extends Pick<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    name: string;
    placeholder?: string;
    multiline?: boolean;
    className?: string;
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

const TextAreaWrapper = styled(makeInputComponent('div')).attrs({contentEditable: true})`
    &:empty:before {
        content: attr(data-placeholder);
        color: ${COLOR_GRAY[5]};
    }
`;

export const FormText: FunctionComponent<FormTextProps> = ({className, placeholder, type, multiline, name}) => {
    return multiline === true ? (
        <TextAreaWrapper className={className} data-placeholder={placeholder} />
    ) : (
        <InputWrapper type={type || 'text'} className={className} placeholder={placeholder} name={name} />
    );
};
