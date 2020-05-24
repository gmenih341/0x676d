import styled from 'styled-components/macro';
import {COLOR_GRAY, FONT_SANS, FONT_SERIF} from '../constants/style.constants';
import {themeSpacer} from '../utils/theme.utils';

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
        color: ${COLOR_GRAY[2]};
        font-family: ${FONT_SANS};
        font-weight: 300;
        text-transform: uppercase;
        white-space: nowrap;
    }

    span {
        flex-grow: 1;
        margin-left: ${themeSpacer(3)};
        overflow: hidden;
        color: ${COLOR_GRAY[4]};
        font-family: ${FONT_SERIF};
        font-weight: 300;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:before {
            content: '\u2014 ';
        }
    }
`;
