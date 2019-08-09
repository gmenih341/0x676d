import styled from 'styled-components/macro';
import {SPACER_BIG} from '../../../constants/style.constants';
import {animated} from 'react-spring';
import {mediaMin} from '../../../utils/style.utils';

export const PageContent = styled(animated.main)`
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 5fr) minmax(0, 4fr);
    grid-template-rows: minmax(0, min-content) minmax(0, max-content);
    grid-gap: ${SPACER_BIG}px;

    ${mediaMin('lg')} {
        .experience {
            grid-column: 1 / 2;
            grid-row: 1 / -1;
        }

        .skills,
        .soft-skills {
            grid-column: 2 / 3;
        }
    }
`;
