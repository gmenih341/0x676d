import styled from '@emotion/styled';
import {mediaMin} from '../../utils/style.utils';

export const GridRow = styled('div')`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
`;

export const GridCol = styled('div')`
    width: ${props => props.xs || 100}%;

    ${mediaMin('sm')} {
        width: ${props => props.sm || props.xs || 100}% !important;
    }

    ${mediaMin('md')} {
        width: ${props => props.md || props.sm || props.xs || 100}% !important;
    }

    ${mediaMin('lg')} {
        width: ${props => props.lg || props.md || props.sm || props.xs || 100}% !important;
    }

    ${mediaMin('xl')} {
        width: ${props => props.xl || props.lg || props.md || props.sm || props.xs || 100}% !important;
    }
`;
