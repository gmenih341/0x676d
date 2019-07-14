import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_SANS} from '../../../constants/style.constants';
import {mediaMin} from '../../../utils/style.utils';

export const Title = styled('h1')`
    margin: 0;
    padding: 0;
    color: ${COLOR_MAIN[7]};
    font-family: ${FONT_SANS};
    font-size: 32px;
    font-weight: 600;

    ${mediaMin('md')} {
        font-size: 48px;
    }
`;
