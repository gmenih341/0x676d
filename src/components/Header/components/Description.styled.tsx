import styled from 'styled-components/macro';
import {FONT_SANS} from '../../../constants/style.constants';
import {themeSpacer} from '../../../utils/theme.utils';

export const Description = styled('span')`
    display: block;
    margin-left: ${themeSpacer(3)};
    font-family: ${FONT_SANS};
    font-size: 16px;
    font-weight: 300;
    text-transform: lowercase;
`;
