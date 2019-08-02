import styled from 'styled-components/macro';
import {SPACER_BIG} from '../../../constants/style.constants';
import {animated} from 'react-spring';

export const PageContent = styled(animated.main)`
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 4fr) minmax(0, 3fr);
    grid-gap: ${SPACER_BIG}px;

    > * {
        grid-column: 1 / -1;
    }
`;
