import styled from '@emotion/styled';
import {SPACER_BIG} from '../../../styles/variables';
import {mediaMin} from '../../../utils/style.utils';

export const Footer = styled('footer')`
    padding: ${SPACER_BIG}px 0;
    ${mediaMin('xl')} {
        margin-bottom: 3em;
    }
`;
