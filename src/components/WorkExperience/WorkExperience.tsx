import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {JobEntry} from './components/JobEntry';

const WorkExperienceComponent: FunctionComponent<ClassNameOnly> = ({className}) => {
    return (
        <ul className={className}>
            <JobEntry company="EqualEyes Ltd." title="Full stack web developer" year="Mar 2016 - Present" isPresent={true}>
                <p>Maintaining and developing microservice solutions for a large rental company using multiple languages and frameworks.</p>
                <p>
                    Leading the development of a microservice solution, to synchronise multiple third-party APIs into a single API. Used
                    TypeScript, NodeJS and MongoDB.
                </p>
                <p>Leading the development of REST backend for an idea sharing app using NodeJS and MongoDB.</p>
                <p>Developed solutions for a large rental company using ReactJS and NodeJS.</p>
                <p>Load tested and optimized a NodeJS WebSocket server, to provide a scalable and robust backend for a live voting app.</p>
            </JobEntry>
            <JobEntry company="ComTrade d.o.o." year="Jun 2015 - Feb 2016" title="Software engineer">
                <p>
                    Mentored a group of students through a week of <i>EDIT Summer School</i>, where we built a simple warehouse robot using
                    AngularJS and Java.
                </p>
                <p>Developed packages for Citrix XenApp.</p>
            </JobEntry>
            <JobEntry company="Education" year="Before 2015">
                <p>
                    Studied Computer Science at <strong>The Faculty of Electrical Engineering and Computer Science</strong>
                    in Maribor.
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
