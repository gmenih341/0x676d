import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY} from '../../../constants/style.constants';
import {ClassNameOnly} from '../../../types/ClassNameOnly';
import {mediaMin} from '../../../utils/style.utils';
import {themeSpacer} from '../../../utils/theme.utils';

interface MenuProps extends ClassNameOnly {
    active: boolean;
    toggle: () => void;
}

const MobileToggleComponent: FunctionComponent<MenuProps> = ({active, className, toggle}) => {
    return (
        <div onClick={toggle} className={className + (active ? ' active' : '')}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
        </div>
    );
};

export const MobileToggle = styled(MobileToggleComponent)`
    display: flex;
    position: absolute;
    z-index: 2000;
    top: ${themeSpacer(6)};
    right: 0;
    box-sizing: content-box;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 15px;
    margin-right: ${themeSpacer(6)};
    padding: ${themeSpacer(3)};
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
