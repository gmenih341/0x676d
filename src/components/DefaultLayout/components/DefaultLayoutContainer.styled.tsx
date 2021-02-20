import styled from 'styled-components/macro';
import {mediaMin, ScreenSize} from '../../../utils/style.utils';
import {themeSpacer} from '../../../utils/theme.utils';

export const DefaultLayoutContainer = styled('main')`
    display: grid;
    grid-template-rows: minmax(0, 100px) 1fr min-content;
    grid-gap: ${themeSpacer(9)};
    margin: ${themeSpacer(9)} auto;

    ${mediaMin('md')} {
        width: calc(${ScreenSize.md}px - ${themeSpacer(9)});
    }

    ${mediaMin('lg')} {
        width: calc(${ScreenSize.lg}px - ${themeSpacer(5)});
    }

    ${mediaMin('xl')} {
        width: calc(${ScreenSize.xl}px - ${themeSpacer(5)});
    }
`;
