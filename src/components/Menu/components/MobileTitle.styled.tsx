import styled from 'styled-components/macro';
import {mediaMax} from '../../../utils/style.utils';
import {themeSpacer} from '../../../utils/theme.utils';

export const MobileTitle = styled('h2')`
    display: none;

    ${mediaMax('md')} {
        display: block;
        margin: 0;
        margin-bottom: ${themeSpacer(6)};
    }
`;
