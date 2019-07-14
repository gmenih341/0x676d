import styled from 'styled-components/macro';
import {SPACER_BIG, COLOR_GRAY, FONT_SANS, SPACER_SMALL, FONT_SERIF} from '../constants/style.constants';

export const SectionTitle = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: ${SPACER_BIG}px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        color: ${COLOR_GRAY[3]};
        font-family: ${FONT_SANS};
        font-weight: 300;
        text-transform: uppercase;
        /* white-space: nowrap; */
    }

    span {
        flex-grow: 1;
        margin-left: ${SPACER_SMALL}px;
        overflow: hidden;
        color: ${COLOR_GRAY[5]};
        font-family: ${FONT_SERIF};
        font-weight: 300;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:before {
            content: '\u2014 ';
        }
    }
`;
