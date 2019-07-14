import React from 'react';
import {ConsoleContent} from '../src/components/ConsoleContent.styled';
import {ExternalLink} from '../src/components/ExternalLink';
import {SectionTitle} from '../src/components/SectionTitle.styled';
import {WorkExperience} from '../src/components/WorkExperience/WorkExperience';
import {WorkSkills} from '../src/components/WorkSkills/WorkSkills';
import {GITHUB_URL, LINKEDIN_URL} from '../src/constants/social.constants';
import {PageComponent} from '../src/types/PageComponent';

/* eslint-disable react/no-unescaped-entities */

const Home: PageComponent = () => null;

Home.displayName = 'home-page';
Home.index = 0;
Home.image = '/static/me.png';
Home.headerContent = (
    <>
        <SectionTitle>
            <h2>Quick Bio</h2>
            <span>it's a me</span>
        </SectionTitle>
        <p>
            I'm Gregor, a web developer from Slovenia, where I've been living for the past years! I've always had an interest in computing,
            which is why I pursued a career as a software engineer. Most days I build websites and APIs, but I won't shy away from anything
            interesting. Throuh my career, I acquired great knowledge of JavaScript and related technologies, problem solving skills and
            other things.
        </p>
        <p>
            If you want to know more about me, feel free to check out my <ExternalLink href={GITHUB_URL}>Github</ExternalLink>, or contact
            me via <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>.
        </p>
    </>
);
Home.contentItems = [
    ({style, key}) => (
        <ConsoleContent className="experience" style={style} key={key}>
            <SectionTitle>
                <h2>Experience</h2>
                <span>not many cause I'm loyal</span>
            </SectionTitle>
            <WorkExperience />
        </ConsoleContent>
    ),
    ({style, key}) => (
        <ConsoleContent className="skills" style={style} key={key}>
            <SectionTitle>
                <h2>Skills</h2>
                <span>many cause I'm smart 🤓</span>
            </SectionTitle>
            <WorkSkills />
        </ConsoleContent>
    ),
];

export default Home;
