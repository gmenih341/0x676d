import shuffle from 'lodash/shuffle';
import React, {FunctionComponent, useEffect} from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components/macro';
import {SPACER} from '../../../constants/style.constants';
import {useToggle} from '../../../hooks/useToggle';
import {ClassNameOnly} from '../../../types/ClassNameOnly';
import {useSortingTransition} from '../animations/useSortingTransition';
import {Skill} from './Skill';

interface SkillRow {
    name: string;
    value: number;
    color: string;
}

const data: SkillRow[] = [
    {name: 'Bootstrap', value: 93, color: '#5B4282'},
    {name: 'PostgreSQL', value: 60, color: '#336791'},
    {name: 'CSS', value: 95, color: '#1572B6'},
    {name: 'TypeScript', value: 80, color: '#007acc'},
    {name: 'Docker', value: 65, color: '#019BC6'},
    {name: 'React', value: 73, color: '#61DAFB'},
    {name: 'NodeJS', value: 85, color: '#83CD29'},
    {name: 'JavaScript', value: 110, color: '#F0DB4F'},
    {name: 'HTML', value: 100, color: '#E44D26'},
    {name: 'Git', value: 100, color: '#F34F29'},
    {name: 'Angular', value: 76, color: '#A6120D'},
    {name: 'NestJS', value: 70, color: '#e0234e'},
    {name: 'Sass/SCSS', value: 100, color: '#CB6699'},
];

const WorkSkillsComponent: FunctionComponent<ClassNameOnly> = React.memo(({className}) => {
    const [sorted, toggleSorted] = useToggle(false);
    const [transition, setData] = useSortingTransition<SkillRow>(data, 22 + SPACER, (item: SkillRow) => item.name);

    useEffect(() => {
        setInterval(() => setData(shuffle(data)), 3000);
        // if (sorted) {
        //     setData(sortBy(data, ['value']).reverse());
        // } else {
        //     setData(sortBy(data, item => data.indexOf(item)));
        // }
    }, [sorted]);

    return (
        <div className={className} style={{height: (22 + SPACER) * data.length}}>
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
    padding-bottom: ${SPACER}px;

    ${Skill} {
        position: absolute;
        width: 100%;
        cursor: pointer;
    }
`;
