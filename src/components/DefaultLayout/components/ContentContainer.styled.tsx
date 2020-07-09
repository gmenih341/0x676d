import styled from 'styled-components/macro';
import {mediaMin} from '../../../utils/style.utils';
import {themeColor, themeSpacer} from '../../../utils/theme.utils';

export const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;

    ${mediaMin('md')} {
        margin: ${themeSpacer(9, -2)};
        padding: ${themeSpacer(9, 2)};

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            z-index: 1000;
            top: ${themeSpacer(9)};
            width: ${themeSpacer(9, 2)};
            height: 100%;
            transform: rotate(2deg);
            background: ${themeColor('pageBackground')};
        }

        &:before {
            left: ${themeSpacer(6, -1)};
            transform-origin: top right;
        }

        &:after {
            right: ${themeSpacer(6, -1)};
            transform-origin: bottom left;
        }
    }
`;
