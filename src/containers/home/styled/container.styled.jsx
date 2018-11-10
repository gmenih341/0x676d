import styled from '@emotion/styled';
import {COLOR_WHITE} from '../../../styles/variables';

export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLOR_WHITE};
`;
