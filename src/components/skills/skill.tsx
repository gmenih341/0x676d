import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {SPACER_SMALL, COLOR_GRAY} from '../../style.contants';

interface SkillProps {
    className?: string;
    color: string;
    value: number;
    name: string;
}

const SkillComponent: FunctionComponent<SkillProps> = ({className, children, name, value}) => {
    return (
        <div className={className} title={name}>
            {children}
            <div className="bar" style={{width: `calc(${value}% - 50px)`}}>
                {name}
            </div>
        </div>
    );
};

export const Skill = styled(SkillComponent)`
    display: flex;

    .bar {
        position: relative;
        flex-shrink: 0;
        height: 22px;
        padding-left: ${SPACER_SMALL}px;
        background-color: ${({color}) => color};
        color: ${COLOR_GRAY[9]};
        font-size: 12px;
        line-height: 22px;
        white-space: nowrap;
    }

    svg {
        flex-basis: 25px;
        flex-shrink: 0;
        width: 22px;
        height: 22px;
        margin-right: ${SPACER_SMALL}px;
        line-height: 22px;
        vertical-align: middle;
    }
`;
