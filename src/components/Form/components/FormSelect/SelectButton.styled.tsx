import styled from 'styled-components/macro';
import {SPACER, COLOR_GRAY} from '../../../../constants/style.constants';
import {BaseButton} from '../BaseButton.styled';

export const SelectButton = styled(BaseButton)`
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
