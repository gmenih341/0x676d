import styled from 'styled-components/macro';
import {COLOR_GRAY, SPACER} from '../../../../../constants/style.constants';
import {BaseInput} from '../../BaseInput.styled';

export const SelectButton = styled(BaseInput)`
    display: flex;
    flex-direction: row;
    overflow: visible;

    span {
        display: block;
        flex-grow: 1;
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
