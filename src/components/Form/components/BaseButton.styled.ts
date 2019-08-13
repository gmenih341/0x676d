import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {COLOR_MAIN} from '../../../constants/style.constants';
import {createBaseContentBox} from '../../../utils/component.utils';
import {boxShadowFocused} from '../../../utils/style.utils';

export const BaseButton = styled(animated.button)`
    ${createBaseContentBox()}

    z-index: 10;
    border: none;
    font-size: 16px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:focus,
    &:active {
        outline: none;
        box-shadow: ${boxShadowFocused(COLOR_MAIN[7])};
    }
`;
