import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {SPACER, SPACER_SMALL} from '../../style.contants';
import {ClassNameOnly} from '../common/types';
import {Skill} from './skill';

interface SkillRow {
    name: string;
    value: number;
    color: string;
}

const data: SkillRow[] = [
    {name: 'Bootstrap', value: 93, color: '#5B4282'},
    {name: 'PostgreSQL', value: 75, color: '#336791'},
    {name: 'CSS', value: 95, color: '#1572B6'},
    {name: 'TypeScript', value: 80, color: '#007acc'},
    {name: 'Docker', value: 45, color: '#019BC6'},
    {name: 'React', value: 65, color: '#61DAFB'},
    {name: 'NodeJS', value: 85, color: '#83CD29'},
    {name: 'JavaScript', value: 85, color: '#F0DB4F'},
    {name: 'HTML', value: 100, color: '#E44D26'},
    {name: 'Git', value: 100, color: '#F34F29'},
    {name: 'Angular', value: 70, color: '#A6120D'},
    {name: 'NestJS', value: 70, color: '#e0234e'},
    {name: 'Sass/SCSS', value: 100, color: '#CB6699'},
];

const SkillsComponent: FunctionComponent<ClassNameOnly> = ({className}) => {
    return (
        <div className={className}>
            {data.map(row => (
                <Skill key={row.name} {...row} />
            ))}
        </div>
    );
};

export const Skills = styled(SkillsComponent)`
    margin-bottom: ${-SPACER_SMALL}px;

    ${Skill} {
        margin: ${SPACER}px 0;
        cursor: pointer;
    }
`;
