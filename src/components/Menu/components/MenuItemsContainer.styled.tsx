import styled from 'styled-components/macro';
import {mediaMax} from '../../../utils/style.utils';
import {themeSpacer} from '../../../utils/theme.utils';
import {CSS_TRANSITION_TIME_MS} from '../menu.constants';

export const MenuItemsContainer = styled('div')`
    display: block;
    box-sizing: border-box;
    align-self: center;
    text-align: right;
    white-space: nowrap;

    ${mediaMax('md')} {
        visibility: hidden;
        z-index: 1000;
        min-height: 100%;
        padding: ${themeSpacer(6)} ${themeSpacer(9)};
        transform: translateY(-50px);
        transition: transform, opacity, visibility;
        transition-duration: ${CSS_TRANSITION_TIME_MS}ms;
        opacity: 0;
        text-align: center;

        &.active {
            visibility: inherit;
            transform: translateY(-15px);
            opacity: 1;
        }
    }
`;
