import styled from 'styled-components/macro';
import React, {FunctionComponent, HTMLAttributes} from 'react';
import {COLOR_BLACK, COLOR_GRAY, COLOR_MAIN, SPACER, SPACER_SMALL} from '../../style.contants';
import {mediaMax, ScreenSize} from '../../utils/style.utils';

interface FormOptionProps extends Pick<HTMLAttributes<HTMLDivElement>, 'onFocus' | 'onClick'> {
    value: string;
    selectable: boolean;
    isNext: boolean;
    isPrevious: boolean;
    isSelected: boolean;
}

const Option = styled('div')`
    max-width: 100%;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    overflow: hidden;
    transition: background 150ms;
    border: 1px solid ${COLOR_GRAY[2]};
    border-bottom: none;
    color: ${COLOR_BLACK};
    font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:hover,
    &:focus {
        background: ${COLOR_MAIN[2]};
    }
`;

const Hint = styled('div')`
    ${mediaMax(ScreenSize.MD)} {
        display: none;
    }
    position: absolute;
    top: 0;
    right: ${SPACER}px;
    color: ${COLOR_GRAY[4]};
    line-height: 30px;

    kbd {
        display: inline-block;
        padding: 2px 3px;
        border: 1px solid ${COLOR_GRAY[3]};
        border-radius: 3px;
        background-color: ${COLOR_GRAY[1]};
        color: ${COLOR_GRAY[6]};
        font-size: 9px;
        line-height: 9px;
        text-shadow: 0 1px 0 #fff;
        white-space: nowrap;
    }
`;

export const FormOption: FunctionComponent<FormOptionProps> = React.memo(({value, selectable, isNext, isPrevious, ...props}) => {
    return (
        <Option tabIndex={selectable ? 0 : -1} title={value} {...props}>
            {value}
            {isPrevious && (
                <Hint>
                    <kbd>Shift</kbd> + <kbd>Tab</kbd>
                </Hint>
            )}
            {isNext && (
                <Hint>
                    <kbd>Tab</kbd>
                </Hint>
            )}
        </Option>
    );
});
