import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {ClassNameOnly} from '../../../types/ClassNameOnly';
import {JobEntry} from './JobEntry';

/* eslint-disable react/no-unescaped-entities */
const WorkExperienceComponent: FunctionComponent<ClassNameOnly> = ({className}) => {
    return (
        <ul className={className}>
            <JobEntry
                company="erento GmbH"
                title="Tech lead"
                year="Oct 2019 - Present"
                isPresent={true}
                stack={['TypeScript', 'Angular', 'NestJS', 'Go', 'Kubernetes', 'PostgreSQL', 'Git']}>
                <p>Mentoring and guiding developers to write quality code and provide sound solutions.</p>
                <p>Developing microservice solutions and maintaining them.</p>
            </JobEntry>
            <JobEntry
                company="EqualEyes Ltd."
                title="Full stack web developer"
                year="Mar 2016 - Oct 2019"
                stack={['JavaScript', 'TypeScript', 'NodeJS', 'React', 'HTML', 'CSS', 'Git']}>
                <p>
                    Leading development of a microservice solution for connecting a taxi rental service with third party APIs in TypeScript,
                    NodeJS and MongoDB.
                </p>
                <p>Developed solutions for a large rental company using ReactJS and NodeJS.</p>
                <p>Leading development of a REST backend for an idea sharing app using NodeJS and MongoDB.</p>
                <p>Load tested and optimized a NodeJS WebSocket server, to provide a scalable and robust backend for a live voting app.</p>
            </JobEntry>
            <JobEntry company="ComTrade d.o.o." title="Student software engineer" year="Jun 2015 - Feb 2016" stack={['JavaScript', 'Git']}>
                <p>
                    Mentored a group of students through a week of <i>EDIT Summer School</i>, where we built a simple warehouse robot using
                    AngularJS and Java.
                </p>
                <p>Developed packages for Citrix XenApp.</p>
            </JobEntry>
            <JobEntry company="FERI Maribor" title="Student" year="Before 2015">
                <p>
                    Studied Computer Science at <strong>The Faculty of Electrical Engineering and Computer Science</strong> in Maribor.
                </p>
                <p>
                    Developed various websites and portals in WordPress, PHP and <span title="Good old days :(">jQuery</span>.
                </p>
            </JobEntry>
        </ul>
    );
};

export const WorkExperience = styled(WorkExperienceComponent)`
    padding: 0;
    list-style: none;
`;
