import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {mediaMin} from '../../../utils/style.utils';
import {themeSpacer} from '../../../utils/theme.utils';

export const PageContent = styled(animated.main)`
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 5fr) minmax(0, 4fr);
    grid-template-rows: minmax(0, min-content) minmax(0, max-content);
    grid-gap: ${themeSpacer(9)};

    > * {
        grid-column: 1 / -1;
    }

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
