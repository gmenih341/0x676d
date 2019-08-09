import styled from 'styled-components/macro';
import {COLOR_MAIN, FONT_TEXT} from '../../../constants/style.constants';
import {mediaMin} from '../../../utils/style.utils';

export const Title = styled('h1')`
    margin: 0;
    padding: 0;
    color: ${COLOR_MAIN[6]};
    font-family: ${FONT_TEXT};
    font-size: 32px;
    font-weight: 800;

    ${mediaMin('md')} {
        font-size: 48px;
    }
`;
