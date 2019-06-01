import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {TimelineItem} from './timeline-item';
import {ClassNameOnly} from '../common/types';

const WorkTimelineComponent: FunctionComponent<ClassNameOnly> = ({className}) => {
    return (
        <ul className={className}>
            <TimelineItem company="EqualEyes Ltd." title="Full stack web developer" year="Mar 2016 +" isPresent={true}>
                <p>
                    Working for a large rental company built with 80+ microservices in varous languages, and an Angular 8 frontend
                    application.
                    <br />
                    Worked with JavaScript, TypeScript (NestJS, Angular, Express), Java (Spring Framework), Go, Kubernetes, Docker and
                    Google Cloud Platform.
                </p>
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
            </TimelineItem>
            <TimelineItem company="ComTrade d.o.o." year="Jun 2015 - Feb 2016" title="Software engineer">
                <p>
                    Guiding a group of students through a week of summer school, where we built a simple item fetching robot.
                    <br />
                    Helping with AngularJS, JavaEE and Linux administration.
                </p>
                <p>Developing packages for Citrix XenApp.</p>
            </TimelineItem>
            <TimelineItem company="Various" title="" year="2015 -">
                <p>Many projects using PHP and JavaScript, that are no longer alive.</p>
            </TimelineItem>
        </ul>
    );
};

export const WorkTimeline = styled(WorkTimelineComponent)`
    padding: 0;
    list-style: none;
`;
