import React, {FunctionComponent, HTMLAttributes} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY, COLOR_WHITE, FONT_SANS} from '../../../../../constants/style.constants';
import {ClassNameOnly} from '../../../../../types/ClassNameOnly';
import {mediaMax} from '../../../../../utils/style.utils';
import {themeColor, themeSpacer} from '../../../../../utils/theme.utils';

interface FormOptionProps extends Pick<HTMLAttributes<HTMLDivElement>, 'onFocus' | 'onClick' | 'onKeyPress'>, ClassNameOnly {
    value: string;
    selectable: boolean;
    isNext: boolean;
    isPrevious: boolean;
}

const FormOptionComponent: FunctionComponent<FormOptionProps> = React.memo(
    ({value, selectable, isNext, isPrevious, className, ...props}) => {
        return (
            <div className={className} tabIndex={selectable ? 0 : -1} title={value} {...props}>
                <span>{value}</span>
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
            </div>
        );
    },
);

export const FormOption = styled(FormOptionComponent)`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    padding: ${themeSpacer(3)} ${themeSpacer(6)};
    border: 1px solid ${themeColor('textDark')};
    border-bottom: none;
    font-family: ${FONT_SANS};
    font-size: 12px;
    line-height: 1em;

    cursor: pointer;

    span {
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover,
    &:focus {
        background: ${COLOR_GRAY[6]};
    }
`;

const Hint = styled('div')`
    ${mediaMax('md')} {
        display: none;
    }
    margin-left: ${themeSpacer(3)};
    color: ${COLOR_WHITE};
    white-space: nowrap;

    kbd {
        display: inline;
        padding: 2px 3px;
        border: 1px solid ${COLOR_GRAY[8]};
        border-radius: 3px;
        box-shadow: 1px 1px 0 ${COLOR_GRAY[9]}, -1px 1px 0 ${COLOR_GRAY[9]};
        background-color: ${COLOR_GRAY[7]};
        color: ${COLOR_GRAY[3]};
        font-size: 10px;
        line-height: 9px;
        vertical-align: middle;
    }
`;
