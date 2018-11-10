import styled from '@emotion/styled';
import {SPACER, SPACER_SMALL, COLOR_BLACK} from '../../../styles/variables';

export const SocialIcons = styled('div')`
    text-align: center;
`;

export const Icon = styled('a')`
    display: inline-block;
    margin: 0 ${SPACER}px;
    color: ${COLOR_BLACK};
    position: relative;
    opacity: 0.5;
    font-size: 0.9em;
    font-weight: 500;
    transition: color 300ms linear, opacity 420ms ease-out;
    padding: ${SPACER_SMALL}px;

    &:before {
        font-size: 1.5em;
        vertical-align: middle;
        margin-right: ${SPACER_SMALL}px;
    }

    &:hover {
        opacity: 1;
        color: ${props => props.color};
    }
`;
