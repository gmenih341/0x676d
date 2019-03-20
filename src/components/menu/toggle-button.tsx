import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY, SPACER, SPACER_SMALL} from '../../style.contants';
import {mediaMin, ScreenSize} from '../../utils/style.utils';

interface MenuProps {
    active: boolean;
    toggle: () => void;
}

const MobileToggle = styled('button')`
    display: flex;
    position: absolute;
    z-index: 2000;
    top: ${SPACER}px;
    right: 0;
    box-sizing: content-box;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 15px;
    padding: ${SPACER_SMALL}px;
    border: none;
    background: none;

    .bar {
        width: 20px;
        height: 3px;
        transform-origin: 0 0;
        transition: transform 300ms;
        background: ${COLOR_GRAY[7]};
    }

    &.active {
        .bar:nth-of-type(2) {
            transform: scaleX(0.7);
        }
        .bar:nth-of-type(3) {
            transform: scaleX(0.5);
        }
    }

    ${mediaMin('md')} {
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
