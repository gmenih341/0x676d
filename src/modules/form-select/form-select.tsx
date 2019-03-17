import styled from 'styled-components/macro';
import React, {FunctionComponent, useRef} from 'react';
import {animated} from 'react-spring';
import {COLOR_BLACK, COLOR_GRAY, COLOR_WHITE, SPACER, SPACER_SMALL, SPACER_BIG} from '../../style.contants';
import {FormOption} from './form-option';
import {SelectActionType, useSelectState} from './state/select-state';
import {DropDownIcon} from '../../components/icons/dropdown.icon';
import {lineClamp} from '../../utils/style.utils';

export type OnValueSelected = (value: string) => void;

interface FormSelectProps {
    name: string;
    placeholder?: string;
    options: string[];
}

const SelectDropdown = styled(animated.div)`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    display: block;
    transform-origin: 0 0;
    position: absolute;
    color: ${COLOR_BLACK};
    background: ${COLOR_WHITE};
    width: 100%;
    top: calc(100% + ${SPACER_SMALL}px);
    max-height: 300px;
    overflow-y: auto;
`;

const FormSelectWrapper = styled('div')`
    position: relative;
`;

const SelectButton = styled('button')`
    font-family: 'Fira Code', Arial, Helvetica, sans-serif;
    display: block;
    width: 100%;
    text-align: left;
    margin: 0;
    border: 1px solid ${COLOR_GRAY[4]};
    background: ${COLOR_GRAY[2]};
    color: ${COLOR_BLACK};
    padding: ${SPACER_SMALL}px ${SPACER}px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    padding-right: ${SPACER_BIG + 5}px;
`;

const DropdownArrow = styled(DropDownIcon)`
    position: absolute;
    margin-top: ${({open}) => (open ? 0 : '-3px')};
    right: ${SPACER}px;
    line-height: 0;
`;

export const FormSelect: FunctionComponent<FormSelectProps> = React.memo(({name, options, placeholder}: FormSelectProps) => {
    const [{value, open, selectIndex}, dispatch] = useSelectState();
    const dropdownRef = useRef<HTMLDivElement>(null);
    return (
        <FormSelectWrapper ref={dropdownRef}>
            <input name={name} type="hidden" value={value} />
            <SelectButton
                tabIndex={-1}
                onClick={() => dispatch({type: SelectActionType.TOGGLE})}
                onBlur={() => dispatch({type: SelectActionType.CLOSE})}>
                {value || placeholder}
                <DropdownArrow open={open} width={15} height={15} fill={COLOR_BLACK} />
            </SelectButton>
            <SelectDropdown
                tabIndex={open ? -1 : 0}
                onFocus={() => dispatch({type: SelectActionType.OPEN})}
                onBlur={e => {
                    if (!(dropdownRef.current && dropdownRef.current.contains(e.relatedTarget as Element))) {
                        dispatch({type: SelectActionType.CLOSE});
                    }
                }}
                style={{transform: open ? 'scale(1)' : 'scale(0)'}}>
                {options.map((option: string, i: number) => (
                    <FormOption
                        key={option}
                        value={option}
                        selectable={open}
                        isPrevious={selectIndex - 1 === i}
                        isSelected={selectIndex === 1}
                        isNext={selectIndex + 1 === i}
                        onFocus={() => dispatch({type: SelectActionType.FOCUSED, selectedIndex: i})}
                        onClick={() => dispatch({type: SelectActionType.SELECTED, option})}
                    />
                ))}
            </SelectDropdown>
        </FormSelectWrapper>
    );
});
