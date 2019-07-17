import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {ClassNameOnly} from '../../types/ClassNameOnly';
import {JobEntry} from './components/JobEntry';

const WorkExperienceComponent: FunctionComponent<ClassNameOnly> = ({className}) => {
    return (
        <ul className={className}>
            <JobEntry company="EqualEyes Ltd." title="Full stack web developer" year="Mar 2016 - Present" isPresent={true}>
                <p>
                    Setting up and leading development of a microservice solution using TypeScript, Express and MongoDB. The service is
                    being used to easily synchronize multiple different APIs together.
                </p>
                <p>Setting up and developing a REST API, to transform an existing CloudKit application into Express and MongoDB.</p>
                <p>Maintaining and developing an exising ReactJS, NodeJS and MySQL platform.</p>
                <p>
                    Stress testing and optimizing a NodeJS backend application, so it could handle tousands of WebSocket connections
                    simultaneously.
                </p>
            </JobEntry>
            <JobEntry company="ComTrade d.o.o." year="Jun 2015 - Feb 2016" title="Software engineer">
                <p>
                    Guiding a group of students through a week of summer school, where we built a simple item fetching robot.
                    <br />
                    Helping with AngularJS, JavaEE and Linux administration.
                </p>
                <p>Developing packages for Citrix XenApp.</p>
            </JobEntry>
            <JobEntry company="Education" year="Before 2015">
                <p>
                    Studied <strong>Computer Science</strong> at <strong>The Faculty of Electrical Engineering and Computer Science</strong>{' '}
                    in Maribor.
                </p>
            </JobEntry>
        </ul>
    );
};

export const WorkExperience = styled(WorkExperienceComponent)`
    padding: 0;
    list-style: none;
`;
