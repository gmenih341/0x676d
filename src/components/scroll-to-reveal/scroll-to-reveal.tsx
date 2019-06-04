import React, {FunctionComponent} from 'react';
import {ClassNameOnly} from '../common/types';
import styled, {keyframes} from 'styled-components/macro';
import {COLOR_GRAY, SPACER_BIG, SPACER_SMALL, SPACER} from '../../style.contants';
import {Logo} from '../logo/logo';

export const ScrollToRevealComponent: FunctionComponent<ClassNameOnly> = ({className, children}) => {
    return (
        <div className={className}>
            <div className="text">
                Scroll to reveal
                <br />
                <span className="i" />
                <span className="i" />
            </div>
        </div>
    );
};

const animation = keyframes`
    0% {
        transform: translateY(0px);
    }
    55% {
        transform: translateY(-10px);
    }
    75% {
        transform: translateY(10px);
    }
    99% {
        transform: translateY(0px);
    }
`;

export const ScrollToReveal = styled(ScrollToRevealComponent)`
    position: absolute;
    width: 100%;

    > .text {
        padding: ${SPACER_BIG}px;
        color: ${COLOR_GRAY[3]};
        font-weight: 300;
        letter-spacing: ${SPACER_SMALL / 3}px;
        text-align: center;
        text-transform: uppercase;

        .i {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-top: ${SPACER}px;
            border-right: 2px solid ${COLOR_GRAY[3]};
            border-bottom: 2px solid ${COLOR_GRAY[3]};

            &:nth-of-type(1) {
                transform: translateX(50%) rotate(45deg);
            }

            &:nth-of-type(2) {
                transform: translateX(-50%) translateY(${SPACER}px) rotate(45deg);
            }
        }
    }
`;
