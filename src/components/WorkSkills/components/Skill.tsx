import kebabCase from 'lodash/kebabCase';
import React, {FunctionComponent, useMemo} from 'react';
import styled from 'styled-components/macro';
import {SPACER_SMALL, COLOR_GRAY} from '../../../constants/style.constants';

interface SkillProps {
    className?: string;
    color: string;
    value: number;
    name: string;
    title?: string;
}

const SkillComponent: FunctionComponent<SkillProps> = React.memo(({className, name, value, title}) => {
    const iconName = useMemo(() => kebabCase(name), [name]);

    return (
        <div className={className} title={title || name}>
            <img src={`/static/skill-icons/${iconName}.svg`} />
            <div className="bar" style={{width: `calc(${value}% - 32px)`}}>
                {name}
            </div>
        </div>
    );
});

export const Skill = styled(SkillComponent)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

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

    img {
        flex-basis: 25px;
        flex-shrink: 0;
        max-width: 25px;
        height: 22px;
        margin-right: ${SPACER_SMALL}px;
        object-fit: contain;
        transform: rotate(-5deg);
    }
`;
