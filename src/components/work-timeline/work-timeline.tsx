import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {TimelineItem} from './timeline-item';

const WorkTimelineComponent: FunctionComponent = ({className}) => {
    return (
        <ul className={className}>
            <TimelineItem company="EqualEyes Ltd." title="Full stack web developer" year="Mar 2016 +" isPresent={true}>
                <p>Working on multiple projects.</p>
                <p>Working on multiple projects.</p>
                <p>Working on multiple projects.</p>
                <p>Working on multiple projects.</p>
                <p>Working on multiple projects.</p>
                <p>Working on multiple projects.</p>
                <p>Optimizing an existing WebSockets application to handle more requests.</p>
            </TimelineItem>
            <TimelineItem company="ComTrade d.o.o." title="Not sure what I was doing" year="Okt 2015 - Feb 2016">
                <p>Here I just wasted a few months</p>
            </TimelineItem>
            <TimelineItem company="ComTrade d.o.o." title="Student instructor" year="Jun - Jul 2015">
                <p>
                    Guiding a group of students through a week of summer school, where we built a simple item fetching robot.
                    <br />
                    Helping with AngularJS, JavaEE and Linux administration.
                </p>
            </TimelineItem>
            <TimelineItem company="Various" title="" year="2015 -" />
        </ul>
    );
};

export const WorkTimeline = styled(WorkTimelineComponent)`
    padding: 0;
    list-style: none;
`;
