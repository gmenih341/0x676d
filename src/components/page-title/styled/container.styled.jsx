import styled from '@emotion/styled';
import {SPACER_BIG, COLOR_JUNGLE_GREEN} from '../../../styles/variables';
import {mediaMin} from '../../../utils/style.utils';

export const Container = styled('div')`
    padding: ${SPACER_BIG}px 0;
    color: ${COLOR_JUNGLE_GREEN};
    ${mediaMin('sm')} {
        padding: ${SPACER_BIG * 2}px 0;
    }
`;
