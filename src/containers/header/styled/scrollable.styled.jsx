import styled from '@emotion/styled';
import {mediaMin} from '../../../utils/style.utils';
import {SPACER} from '../../../styles/variables';

export const Scrollable = styled('div')`
    overflow: hidden;
    height: ${props => props.height}px;

    ${mediaMin('sm')} {
        margin-left: ${SPACER}px;
    }
`;
