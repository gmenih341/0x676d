import React, {useState, useEffect} from 'react';
import {Trail, animated} from 'react-spring';
import {ConsoleBox} from '../console-box/console-box.component';
import styled from '@emotion/styled';
import {mediaMin, lineClamp} from '../../utils/style.utils';
import {COLOR_MAIN, SPACER, COLOR_GRAY, SPACER_SMALL} from '../../styles/variables';
import profile from '../../assets/profile.png';
import {GridRow, GridCol} from '../grid/grid.component';

import skillItems from '../../assets/skills.json5';

const BLOCK_OFFSET = '2px';
const PROFILE_OFFSET = '4px';
const BIRTH_DATE = new Date('1994-03-08T03:45:00.000');
const MILLISECONDS_IN_AVG_YEAR = 1000 * 60 * 60 * 24 * 365.24;

const ProfilePic = styled('div')`
    width: 200px;
    min-height: 200px;
    height: 100%;
    background: url(${profile}) no-repeat center center;
    background-size: auto 100%;
    flex-grow: 0;
    flex-shrink: 0;

    ${mediaMin('sm')} {
        margin-right: ${SPACER}px;
    }

    &:before {
        content: ' ';
        position: relative;
        left: -${PROFILE_OFFSET};
        top: -${PROFILE_OFFSET};
        width: 200px;
        height: 100%;
        background-color: ${COLOR_GRAY[6]};
        display: block;
        z-index: -1;
    }
`;

const InfoContainer = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 0 ${SPACER_SMALL}px;
`;

const Quote = styled('div')`
    padding: ${SPACER_SMALL}px 0;
    color: ${COLOR_GRAY[3]};
    flex-grow: 1;
`;

const InfoLine = styled('div')`
    flex-grow: 0;
    flex-shrink: 0;
    padding: ${SPACER_SMALL / 2}px;

    span {
        display: inline-block;
        color: ${COLOR_GRAY[3]};
        width: 115px;
    }
`;

const Skill = styled('div')`
    display: flex;
    width: 100%;
    flex-shrink: 0;

    &:not(:last-of-type) {
        margin-bottom: ${SPACER_SMALL}px;
    }

    span {
        flex-grow: 1;
        line-height: 30px;
        margin-right: ${SPACER}px;
        ${lineClamp(1, 30, 'px')};
    }

    div {
        width: 66%;
        flex-grow: 0;
        flex-shrink: 0;
        height: 30px;
    }
`;

const SkillBarContainer = styled('div')`
    display: block;
    position: relative;
    top: -${BLOCK_OFFSET};
    left: -${BLOCK_OFFSET};
    width: 66%;
    flex-grow: 0;
    flex-shrink: 0;
    height: 25px;
    background-color: ${COLOR_GRAY[7]};
`;

const SkillBar = styled(animated.div)`
    position: relative;
    display: block;
    top: ${BLOCK_OFFSET};
    left: ${BLOCK_OFFSET};
    height: 100%;
    background-color: ${COLOR_MAIN[6]};
    transform-origin: 0 0;
`;

/* eslint-disable */
const skillTrail = item => props => (
    <Skill>
        <span>{item.name}</span>
        <SkillBarContainer>
            <SkillBar style={{width: `${item.value * props.p}%`}} />
        </SkillBarContainer>
    </Skill>
);
/* eslint-enable */

export function HomePage () {
    const age = useExactAge(BIRTH_DATE);
    return (
        <>
            <GridRow>
                <GridCol xl={50}>
                    <ConsoleBox title="About me" direction="row">
                        <ProfilePic />
                        <InfoContainer>
                            <Quote>a fullstack web developer with an increasing love for the frontend</Quote>
                            <InfoLine>
                                <span>Employment:</span>
                                EqualEyes ltd
                            </InfoLine>
                            <InfoLine>
                                <span>Location:</span>
                                Maribor, 🇸🇮
                            </InfoLine>
                            <InfoLine>
                                <span>Uptime:</span>~{age} years
                            </InfoLine>
                        </InfoContainer>
                    </ConsoleBox>
                </GridCol>
                <GridCol xl={50}>
                    <ConsoleBox title="Skills" direction="column">
                        <Trail items={skillItems} keys={item => item.name + item.value} from={{p: 0}} to={{p: 1}} config={{delay: 1000}}>
                            {skillTrail}
                        </Trail>
                    </ConsoleBox>
                </GridCol>
            </GridRow>
        </>
    );
}

function useExactAge (birth) {
    const [age, setAge] = useState(24);
    useEffect(() => {
        const diff = ((Date.now() - birth.getTime()) / MILLISECONDS_IN_AVG_YEAR).toFixed(4);
        setAge(diff);
    });
    return age;
}
