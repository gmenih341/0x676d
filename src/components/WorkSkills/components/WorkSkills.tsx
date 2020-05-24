import orderBy from 'lodash/orderBy';
import reverse from 'lodash/reverse';
import React, {FunctionComponent, useEffect, useMemo} from 'react';
import {animated} from 'react-spring';
import styled, {DefaultTheme} from 'styled-components/macro';
import {ClassNameOnly} from '../../../types/ClassNameOnly';
import {themeSpacer} from '../../../utils/theme.utils';
import {useSortingTransition} from '../animations/useSortingTransition';
import {Skill} from './Skill';

interface SkillRow {
    name: string;
    value: number;
    color: string;
    title?: string;
}

const data: SkillRow[] = [
    {name: 'Bootstrap', value: 90, color: '#5B4282'},
    {name: 'PostgreSQL', value: 65, color: '#336791'},
    {name: 'CSS', value: 95, color: '#1572B6'},
    {name: 'TypeScript', value: 85, color: '#007acc'},
    {name: 'Docker', value: 65, color: '#019BC6'},
    {name: 'React', value: 75, color: '#61DAFB'},
    {name: 'Go', value: 70, color: '#2DBCAF'},
    {name: 'NodeJS', value: 90, color: '#83CD29'},
    {name: 'JavaScript', value: 110, color: '#F0DB4F', title: 'Not guaranteed.'},
    {name: 'HTML', value: 100, color: '#E44D26'},
    {name: 'Git', value: 80, color: '#F34F29'},
    {name: 'Angular', value: 75, color: '#A6120D'},
    {name: 'NestJS', value: 70, color: '#e0234e'},
    {name: 'Sass/SCSS', value: 80, color: '#CB6699'},
];

interface WorkSkillsProps extends ClassNameOnly {
    sorted: boolean;
    theme: DefaultTheme;
}

const WorkSkillsComponent: FunctionComponent<WorkSkillsProps> = React.memo(({className, sorted, theme: t}) => {
    const [transition, setData] = useSortingTransition<SkillRow>(data, 24 + t.spacers[5], (item: SkillRow) => item.name);
    const height = useMemo(() => {
        return 24 * data.length + t.spacers[5] * (data.length - 1);
    }, [data]);

    useEffect(() => {
        setData(sorted ? reverse(orderBy(data, 'value')) : data);
    }, [sorted]);

    return (
        <div className={className} style={{height}}>
            {transition(({props, item, key}) => (
                <animated.div key={key} style={props}>
                    <Skill {...item} />
                </animated.div>
            ))}
        </div>
    );
});

export const WorkSkills = styled(WorkSkillsComponent)`
    position: relative;
    box-sizing: content-box;
    margin-bottom: ${themeSpacer(9)};

    ${Skill} {
        position: absolute;
        width: 100%;
        cursor: pointer;
    }
`;
