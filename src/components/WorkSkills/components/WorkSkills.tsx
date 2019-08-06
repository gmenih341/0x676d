import React, {FunctionComponent, useEffect, useMemo} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {SPACER, COLOR_GRAY, SPACER_BIG} from '../../../constants/style.constants';
import {useToggle} from '../../../hooks/useToggle';
import {ClassNameOnly} from '../../../types/ClassNameOnly';
import {useSortingTransition} from '../animations/useSortingTransition';
import {Skill} from './Skill';
import orderBy from 'lodash/orderBy';
import reverse from 'lodash/reverse';

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
}

const WorkSkillsComponent: FunctionComponent<WorkSkillsProps> = React.memo(({className, sorted}) => {
    const [transition, setData] = useSortingTransition<SkillRow>(data, 22 + SPACER, (item: SkillRow) => item.name);
    const height = useMemo(() => {
        return 22 * data.length + SPACER * (data.length - 1);
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
    margin-bottom: ${SPACER_BIG}px;
    border-right: 1px dashed ${COLOR_GRAY[6]};

    ${Skill} {
        position: absolute;
        width: 100%;
        cursor: pointer;
    }
`;
