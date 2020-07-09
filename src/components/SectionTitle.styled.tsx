import styled from 'styled-components/macro';
import {FONT_SANS, FONT_SERIF} from '../constants/style.constants';
import {themeColor, themeSpacer} from '../utils/theme.utils';

export const SectionTitle = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: ${themeSpacer(9)};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        color: ${themeColor('textLight')};
        font-family: ${FONT_SANS};
        font-weight: 300;
        text-transform: uppercase;
        white-space: nowrap;
    }

    span {
        flex-grow: 1;
        margin-left: ${themeSpacer(3)};
        overflow: hidden;
        color: ${themeColor('textLight', 0.6)};
        font-family: ${FONT_SERIF};
        font-weight: 300;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:before {
            content: '\u2014 ';
        }
    }
`;
