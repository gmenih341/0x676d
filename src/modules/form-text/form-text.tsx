import React, {FunctionComponent} from 'react';
import {makeInputComponent} from '../../components/common/input';
import styled from 'styled-components';
import {COLOR_GRAY} from '../../style.contants';

export interface FormTextProps {
    placeholder?: string;
    className?: string;
}

const InputWrapper = styled(makeInputComponent('div'))`
    &:empty:before {
        content: attr(data-placeholder);
        position: absolute;
        color: ${COLOR_GRAY[5]};
    }
`;

export const FormText: FunctionComponent<FormTextProps> = ({className, placeholder}) => {
    return <InputWrapper contentEditable={true} className={className} data-placeholder={placeholder} />;
};
