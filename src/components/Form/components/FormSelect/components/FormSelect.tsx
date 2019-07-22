import React, {FocusEvent, FunctionComponent, useEffect, useMemo, useRef} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY} from '../../../../../constants/style.constants';
import {DropDownIcon} from '../../../icons/DropdownIcon';
import {BaseFormElement} from '../../../types/BaseFormElement';
import {FormOption} from './FormOption';
import {SelectButton} from './SelectButton.styled';
import {SelectDropdown} from './SelectDropdown.styled';
import {SelectActionType, useSelectState} from '../state/selectState';

export type OnValueSelected = (value: string) => void;

interface FormSelectProps extends BaseFormElement<string> {
    options: string[];
}

export const FormSelectComponent: FunctionComponent<FormSelectProps> = React.memo(({name, options, placeholder, setValue, className}) => {
    const [{value, open, selectIndex}, dispatch] = useSelectState();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const openDropdown = () => dispatch({type: SelectActionType.OPEN});
    const closeDropdown = () => dispatch({type: SelectActionType.CLOSE});
    const toggleDropdown = () => dispatch({type: SelectActionType.TOGGLE});

    const selectOptions = useMemo(
        () =>
            options.map((option: string, i: number) => (
                <FormOption
                    key={option}
                    value={option}
                    selectable={open}
                    isPrevious={selectIndex === i + 1}
                    isNext={selectIndex === i - 1}
                    onFocus={() => dispatch({type: SelectActionType.FOCUSED, selectedIndex: i})}
                    onClick={() => dispatch({type: SelectActionType.SELECTED, option})}
                    onKeyPress={e => e.key === 'Enter' && dispatch({type: SelectActionType.SELECTED, option})}
                />
            )),
        [open, selectIndex],
    );

    const onBlurHandler = (e: FocusEvent<HTMLDivElement>) => {
        if (!(dropdownRef.current && dropdownRef.current.contains(e.relatedTarget as Element))) {
            closeDropdown();
        }
    };

    useEffect(() => {
        if (setValue) {
            setValue(value);
        }
    }, [value]);

    return (
        <SelectButton
            ref={() => dropdownRef}
            tabIndex={open ? -1 : 0}
            type="button"
            className={className}
            onClick={toggleDropdown}
            onBlur={closeDropdown}>
            <input name={name} type="hidden" value={value} />
            <span data-placeholder={placeholder}>{value}</span>
            <DropDownIcon open={open} width={15} height={15} fill={COLOR_GRAY[4]} />
            {open && (
                <SelectDropdown tabIndex={1} onFocus={openDropdown} onBlur={onBlurHandler}>
                    {selectOptions}
                </SelectDropdown>
            )}
        </SelectButton>
    );
});

export const FormSelect = styled(FormSelectComponent)`
    position: relative;
    z-index: 20;
`;
