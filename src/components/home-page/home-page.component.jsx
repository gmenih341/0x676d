import React from 'react';
import {ConsoleBox} from '../console-box/console-box.component';
import styled from '@emotion/styled';
import {mediaMin} from '../../utils/style.utils';
import {COLOR_MAIN, SPACER, COLOR_GRAY, SPACER_SMALL} from '../../styles/variables';
import profile from '../../assets/profile.png';
import {GridRow, GridCol} from '../grid/grid.component';

const ProfilePic = styled('div')`
    width: 200px;
    height: 200px;
    background-color: ${COLOR_MAIN[3]};
    display: block;
    transform: rotate(-2deg);
    flex-grow: 0;
    flex-shrink: 0;

    ${mediaMin('sm')} {
        margin-right: ${SPACER}px;
    }

    img {
        max-width: 100%;
        transform: rotate(2deg);
    }
`;

const InfoContainer = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 0 ${SPACER_SMALL}px;
`;

const Quote = styled('div')`
    padding: ${SPACER_SMALL}px 0;
    color: ${COLOR_GRAY[4]};
    text-align: center;
    flex-grow: 1;
`;

const InfoLine = styled('div')`
    flex-grow: 0;
    flex-shrink: 0;
    span {
        color: ${COLOR_MAIN[4]};
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
    }
`;

const SkillBar = styled('div')`
    display: block;
    position: relative;
    width: 66%;
    flex-grow: 0;
    flex-shrink: 0;
    height: 30px;

    &:after {
        content: ' ';
        display: block;
        width: ${props => props.percent}%;
        height: 100%;
        background: purple;
    }
`;

export function HomePage () {
    return (
        <>
            <GridRow>
                <GridCol xl={50}>
                    <ConsoleBox title="About me" direction="row">
                        <ProfilePic>
                            <img src={profile} alt="my-face.pdf" />
                        </ProfilePic>
                        <InfoContainer>
                            <Quote>
                                a fullstack web developer with an increasing love for the frontend
                                <br />
                            </Quote>
                            <InfoLine>
                                Uptime: <span>24 years</span>
                            </InfoLine>
                            <InfoLine>
                                Length: <span>1.98 m</span>
                            </InfoLine>
                            <InfoLine>
                                IQ: <span>81</span>
                            </InfoLine>
                            <InfoLine>
                                Eyes: <span>2</span>
                            </InfoLine>
                        </InfoContainer>
                    </ConsoleBox>
                </GridCol>
                <GridCol xl={50}>
                    <ConsoleBox title="Skills" direction="column">
                        <Skill>
                            <span>JavaScript</span>
                            <SkillBar percent={300} />
                        </Skill>
                        <Skill>
                            <span>TypeScript</span>
                            <SkillBar percent={20} />
                        </Skill>
                        <Skill>
                            <span>CSS</span>
                            <SkillBar percent={30} />
                        </Skill>
                        <Skill>
                            <span>SQL</span>
                            <SkillBar percent={40} />
                        </Skill>
                        <Skill>
                            <span>OTHA SHIZ</span>
                            <SkillBar percent={50} />
                        </Skill>
                        <Skill>
                            <span>Farming</span>
                            <SkillBar percent={80} />
                        </Skill>
                    </ConsoleBox>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol>
                    <ConsoleBox title="You have a big monitor">Where did you get it</ConsoleBox>
                </GridCol>
            </GridRow>
        </>
    );
}
