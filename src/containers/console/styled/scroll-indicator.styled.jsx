import styled from '@emotion/styled';
import {COLOR_FLAME, SPACER_BIG} from '../../../styles/variables';

export const ScrollIndicator = styled('div')`
    border: 3px solid ${COLOR_FLAME};
    border-radius: 35%;
    height: 50px;
    width: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: ${SPACER_BIG}px;
    opacity: 0.6;
    transform: translateX(-50%);
`;

export const Wheel = styled('div')`
    width: 4px;
    height: 8px;
    background-color: ${COLOR_FLAME};
    margin: 10px -2px;
    border-radius: 35%;
    animation: scroll 7s infinite;

    @keyframes scroll {
        0%,
        40%,
        80% {
            transform: translateY(-2px);
        }

        20%,
        60% {
            transform: translateY(2px);
        }

        80% {
            height: 8px;
            opacity: 1;
        }

        90% {
            transform: translateY(15px);
            height: 15px;
        }

        100% {
            transform: translateY(-1px);
            height: 8px;
        }
    }
`;
