import * as React from 'react';
import kebabCase from 'lodash/kebabCase';

interface SkillRow {
    name: string;
    value: number;
    color: string;
    title?: string;
}

export const TechIcon: React.FC<{icon: string}> = ({icon}) => {
    const iconName = React.useMemo(() => kebabCase(icon), [icon]);

    return <img src={`/skill-icons/${iconName}.svg`}></img>;
}