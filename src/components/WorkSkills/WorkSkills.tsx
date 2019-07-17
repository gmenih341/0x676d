import React, {FunctionComponent, useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {SPACER, SPACER_SMALL, SPACER_BIG} from '../../constants/style.constants';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {Skill} from './components/Skill';
import sortBy from 'lodash/sortBy';
import {useTransition, animated, config} from 'react-spring';
import {useToggle} from '../../hooks/useToggle';
import {useSortingTransition} from '../../animations/hooks/useSortingTransition';

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
    const {height, transition, toggleSorted} = useSortingTransition(data);

    return (
        <div className={className} style={{height}}>
            {transition(({item, props: {y}, key}, index) => (
                <animated.div key={key} style={{zIndex: data.length - index, transform: y.interpolate(y => `translate3d(0,${y}px,0)`)}}>
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
