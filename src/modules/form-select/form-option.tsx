import React, {FunctionComponent, HTMLAttributes} from 'react';
import styled from '@emotion/styled';
import {SPACER_SMALL, COLOR_GRAY, COLOR_BLACK, SPACER, COLOR_MAIN} from '../../style.contants';

interface FormOptionProps extends Pick<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    value: string;
    selected: boolean;
}

const Option = styled('div')`
    font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
    background: ${COLOR_GRAY[1]};
    padding: ${SPACER_SMALL}px ${SPACER}px;
    border: 1px solid ${COLOR_GRAY[2]};
    border-bottom: none;
    color: ${COLOR_BLACK};
    transition: background 150ms;
    font-weight: ${({selected}) => (selected ? 'bold' : 'inherit')};

    &:hover {
        background: ${COLOR_MAIN[2]};
    }
`;

export const FormOption: FunctionComponent<FormOptionProps> = ({value, ...props}) => {
    return <Option {...props}>{value}</Option>;
};
