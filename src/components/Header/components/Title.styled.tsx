import styled from 'styled-components/macro';
import {FONT_SANS} from '../../../constants/style.constants';
import {mediaMin} from '../../../utils/style.utils';
import {themeColor} from '../../../utils/theme.utils';

export const Title = styled('h1')`
    margin: 0;
    padding: 0;
    color: ${themeColor('yolo')};
    font-family: ${FONT_SANS};
    font-size: 32px;
    font-weight: 600;

    ${mediaMin('md')} {
        font-size: 48px;
    }
`;
