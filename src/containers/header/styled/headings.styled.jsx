import styled from '@emotion/styled';
import {mediaMin} from '../../../utils/style.utils';

export const Headings = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: static;

    ${mediaMin('sm')} {
        flex-direction: row;
        justify-content: center;
    }
`;
