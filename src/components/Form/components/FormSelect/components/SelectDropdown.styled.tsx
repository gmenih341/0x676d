import styled from 'styled-components/macro';
import {SPACER_SMALL, COLOR_GRAY, COLOR_WHITE} from '../../../../../constants/style.constants';

export const SelectDropdown = styled('div')`
    display: block;
    position: absolute;
    z-index: 1000;
    top: calc(100% + ${SPACER_SMALL}px);
    left: 0;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    transform-origin: 0 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: ${COLOR_GRAY[7]};
    color: ${COLOR_WHITE};
`;
