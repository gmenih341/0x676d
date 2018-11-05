import styled from '@emotion/styled';
import {COLOR_FLAME} from '../../../styles/variables';

export const Cover = styled('div')`
    top: ${props => (props.loading ? 0 : '-2vh')};
    height: ${props => (props.loading ? 100 : 35)}vh;
    transform: ${props => (props.loading ? 'rotate(0)' : 'rotate(1deg)')};
    background-color: ${COLOR_FLAME};
    background-image: linear-gradient(141deg, #f09819, #edde5d);
    position: absolute;
    width: 110%;
    left: -5%;
    z-index: -1;
    transition: all 420ms ease-out;
`;
