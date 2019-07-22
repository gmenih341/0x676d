import React, {FunctionComponent, FormEvent} from 'react';
import styled from 'styled-components/macro';
import {BaseInput} from './BaseInput.styled';
import {COLOR_GRAY} from '../../../constants/style.constants';
import {BaseFormElement} from '../types/BaseFormElement';

const TextAreaInputComponent: FunctionComponent<BaseFormElement<string>> = React.memo(({className, placeholder, value, setValue}) => {
    const onInput = (e: FormEvent<HTMLDivElement>) => setValue && setValue(e.currentTarget.textContent || '');
    return (
        <BaseInput className={className} data-placeholder={placeholder} onInput={onInput} as="div" contentEditable={true}>
            {value}
        </BaseInput>
    );
});

export const TextAreaInput = styled(TextAreaInputComponent)`
    align-self: unset;

    &:empty:before {
        content: attr(data-placeholder);
        color: ${COLOR_GRAY[5]};
    }
`;
