import React, {FunctionComponent, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components/macro';
import {FormOption} from './form-option';
import {SelectActionType, useSelectState} from './state/select-state';
import {SPACER_SMALL, COLOR_GRAY, COLOR_WHITE, SPACER} from '../../../style.contants';
import {makeInputComponent} from '../../../components/common/input';
import {DropDownIcon} from '../../../components/icons/dropdown.icon';
import {BaseFormElement} from '../interfaces/base-form-element';

export type OnValueSelected = (value: string) => void;

interface FormSelectProps extends BaseFormElement<string> {
    options: string[];
}

const FormSelectWrapper = styled('div')`
    position: relative;
`;

const SelectDropdown = styled('div')`
    display: block;
    position: absolute;
    z-index: 1000;
    top: calc(100% + ${SPACER_SMALL}px);
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    transform-origin: 0 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: ${COLOR_GRAY[7]};
    color: ${COLOR_WHITE};
`;

const SelectButton = styled(makeInputComponent('button'))`
    display: flex;
    flex-direction: row;

    span {
        display: block;
        flex-grow: 1;
        max-width: 100%;
        margin-right: ${SPACER}px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:empty:before {
            content: attr(data-placeholder);
            color: ${COLOR_GRAY[5]};
        }
    }
`;

const DropdownArrow = styled(DropDownIcon)`
    margin-top: ${({open}) => (open ? 0 : '-3px')};
    line-height: 0;
`;

export const FormSelect: FunctionComponent<FormSelectProps> = React.memo(({name, options, placeholder, setValue, className}) => {
    const [{value, open, selectIndex}, dispatch] = useSelectState();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const openDropdown = () => dispatch({type: SelectActionType.OPEN});
    const closeDropdown = () => dispatch({type: SelectActionType.CLOSE});
    const toggleDropdown = () => dispatch({type: SelectActionType.TOGGLE});
    useLayoutEffect(() => {
        if (setValue) {
            setValue(value);
        }
    }, [value]);
    return (
        <FormSelectWrapper ref={dropdownRef} className={className}>
            <input name={name} type="hidden" value={value} />
            <SelectButton tabIndex={-1} type="button" onClick={toggleDropdown} onBlur={closeDropdown}>
                <span data-placeholder={placeholder}>{value}</span>
                <DropdownArrow open={open} width={15} height={15} fill={COLOR_GRAY[4]} />
            </SelectButton>
            <SelectDropdown
                tabIndex={open ? -1 : 0}
                onFocus={openDropdown}
                onBlur={e => {
                    if (!(dropdownRef.current && dropdownRef.current.contains(e.relatedTarget as Element))) {
                        closeDropdown();
                    }
                }}
                style={{transform: open ? 'scale(1)' : 'scale(0)'}}>
                {options.map((option: string, i: number) => (
                    <FormOption
                        key={option}
                        value={option}
                        selectable={open}
                        isPrevious={selectIndex === i + 1}
                        isSelected={selectIndex === 1}
                        isNext={selectIndex === i - 1}
                        onFocus={() => dispatch({type: SelectActionType.FOCUSED, selectedIndex: i})}
                        onClick={() => dispatch({type: SelectActionType.SELECTED, option})}
                        onKeyPress={e => e.key === 'Enter' && dispatch({type: SelectActionType.SELECTED, option})}
                    />
                ))}
            </SelectDropdown>
        </FormSelectWrapper>
    );
});
