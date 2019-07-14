import styled from 'styled-components/macro';
import {SPACER_SMALL, SPACER_BIG, COLOR_MAIN, FONT_MONO, COLOR_WHITE} from '../../../constants/style.constants';

export const BaseButton = styled('button')`
    padding: ${SPACER_SMALL}px ${SPACER_BIG}px;
    border: 1px solid ${COLOR_MAIN[5]};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: none;
    color: ${COLOR_MAIN[5]};
    font-family: ${FONT_MONO};
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;

    &:hover {
        background: ${COLOR_MAIN[5]};
        color: ${COLOR_WHITE};
    }
`;
