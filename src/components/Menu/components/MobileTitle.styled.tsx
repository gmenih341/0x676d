import styled from 'styled-components/macro';
import {SPACER} from '../../../constants/style.constants';
import {mediaMax} from '../../../utils/style.utils';

export const MobileTitle = styled('h2')`
    display: none;

    ${mediaMax('md')} {
        display: block;
        margin: 0;
        margin-bottom: ${SPACER}px;
    }
`;
