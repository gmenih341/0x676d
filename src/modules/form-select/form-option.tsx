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
    font-family: 'Fira Sans', Arial, Helvetica, sans-serif;
    font-size: 12px;
    padding: ${SPACER_SMALL}px ${SPACER}px;
    border: 1px solid ${COLOR_GRAY[2]};
    border-bottom: none;
    color: ${COLOR_BLACK};
    transition: background 150ms;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

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
    right: ${SPACER}px;
    top: 0;
    color: ${COLOR_GRAY[4]};
    line-height: 30px;

    kbd {
        padding: 2px 3px;
        border: 1px solid ${COLOR_GRAY[3]};
        background-color: ${COLOR_GRAY[1]};
        color: ${COLOR_GRAY[6]};
        font-size: 9px;
        line-height: 9px;
        border-radius: 3px;
        display: inline-block;
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
