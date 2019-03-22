import React, {FunctionComponent, FormEvent} from 'react';
import styled from 'styled-components/macro';
import {makeInputComponent} from '../../../components/common/input';
import {COLOR_GRAY} from '../../../style.contants';
import {BaseFormElement} from '../interfaces/base-form-element';

const TextAreaWrapper = styled(makeInputComponent('div')).attrs({contentEditable: true})`
    &:empty:before {
        content: attr(data-placeholder);
        color: ${COLOR_GRAY[5]};
    }
`;

export const FormTextArea: FunctionComponent<BaseFormElement<string>> = React.memo(({className, placeholder, value, setValue}) => {
    const onInput = (e: FormEvent<HTMLDivElement>) => setValue && setValue(e.currentTarget.textContent || '');
    return (
        <TextAreaWrapper className={className} data-placeholder={placeholder} onInput={onInput}>
            {value}
        </TextAreaWrapper>
    );
});
