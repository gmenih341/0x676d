import styled from 'styled-components/macro';
import {FONT_SANS, SPACER_SMALL} from '../../../constants/style.constants';

export const Description = styled('span')`
    display: block;
    margin-left: ${SPACER_SMALL}px;
    font-family: ${FONT_SANS};
    font-size: 16px;
    font-weight: 300;
    text-transform: lowercase;
`;
