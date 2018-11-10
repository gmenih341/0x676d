import styled from '@emotion/styled';
import {SPACER_BIG} from '../../../styles/variables';
import {mediaMin} from '../../../utils/style.utils';

export const Footer = styled('footer')`
    padding: ${SPACER_BIG}px 0;

    ${mediaMin('sm')} {
        padding: ${SPACER_BIG * 2}px 0;
    }
`;
