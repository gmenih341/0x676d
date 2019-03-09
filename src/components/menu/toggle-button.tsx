import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled-base';
import {SPACER, COLOR_GRAY, SPACER_SMALL} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

interface MenuProps {
    active: boolean;
    toggle: () => void;
}

const MobileToggle = styled('button')`
    position: absolute;
    z-index: 2000;
    top: ${SPACER}px;
    right: 0;
    background: none;
    border: none;
    padding: 0;
    width: 20px;
    height: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${SPACER_SMALL}px;
    box-sizing: content-box;

    .bar {
        width: 20px;
        height: 3px;
        background: ${COLOR_GRAY[7]};
        transition: transform 300ms;
        transform-origin: 0 0;
    }

    &.active {
        .bar:nth-of-type(2) {
            transform: scaleX(0.7);
        }
        .bar:nth-of-type(3) {
            transform: scaleX(0.5);
        }
    }

    ${mediaMin(ScreenSize.MD)} {
        display: none;
    }
`;

export const ToggleButton: FunctionComponent<MenuProps> = ({toggle, active}) => {
    return (
        <MobileToggle onClick={toggle} className={active ? 'active' : ''}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
        </MobileToggle>
    );
};
