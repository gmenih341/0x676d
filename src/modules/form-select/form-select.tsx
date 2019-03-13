import styled from '@emotion/styled';
import React, {FunctionComponent, useState} from 'react';
import {animated, useSpring} from 'react-spring';
import {COLOR_BLACK, COLOR_GRAY, SPACER} from '../../style.contants';
import {FormOption} from './form-option';

export type OnValueSelected = (value: string) => void;

interface FormSelectProps {
    name: string;
    placeholder?: string;
    options: string[];
}

const SelectDropdown = styled('div')`
    background: ${COLOR_GRAY[2]};
    color: ${COLOR_BLACK};
    padding: ${SPACER}px;
    position: relative;
    cursor: pointer;
    z-index: 1000;
`;

const OptionsContainer = styled(animated.div)`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    transform-origin: 0 0;
    z-index: 100;
`;

const DropdownButton = styled('div')`
    z-index: 1000;
`;

export const FormSelect: FunctionComponent<FormSelectProps> = ({name, options, placeholder}: FormSelectProps) => {
    const [value, setValue] = useState(placeholder || options[0]);
    const [open, setOpen] = useState(false);
    const props = useSpring({
        to: [
            {transform: open ? 'scaleY(1)' : 'scaleY(0)', opacity: open ? 1 : 0, visibility: 'visible'},
            {transform: open ? 'scaleY(1)' : 'scaleY(0)', visibility: open ? 'visible' : 'hidden'},
        ],
        config: {
            mass: 1,
            friction: 35,
            tension: 500,
        },
    });

    return (
        <div>
            <input name={name} value={value} type="hidden" />
            <SelectDropdown onClick={() => setOpen(!open)}>
                <OptionsContainer style={props}>
                    {options.map(option => (
                        <FormOption key={option} value={option} selected={option === value} onClick={() => setValue(option)} />
                    ))}
                </OptionsContainer>
                <DropdownButton>{value}</DropdownButton>
            </SelectDropdown>
        </div>
    );
};
