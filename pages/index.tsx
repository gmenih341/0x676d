import React from 'react';
import {ConsoleContent} from '../src/components/ConsoleContent.styled';
import {SectionTitle} from '../src/components/SectionTitle.styled';
import {WorkExperience} from '../src/components/WorkExperience/WorkExperience';
import {WorkSkills} from '../src/components/WorkSkills/components/WorkSkills';
import {PageComponent} from '../src/types/PageComponent';
/* eslint-disable react/no-unescaped-entities */

const Home: PageComponent = () => null;

Home.displayName = 'home-page';
Home.index = 0;
Home.image = '/static/me.png';
Home.headerContent = (
    <>
        <SectionTitle>
            <h2>About</h2>
        </SectionTitle>
        <p>
            My name is Gregor, and I'm a developer from Slovenia. Most of the time, I'm working with <code>(Type|Java)Script</code> and
            related technologies, but I enjoy learning new Sometimes, I'll be tinkering with hardware as well, and trying my luck with{' '}
            <code>C</code>.
        </p>
        <p>
            Through my career, I've had the chance to experience many different frameworks, languages and development approaches. I've also
            gained the ability to quickly learn and adapt to new environments. PLEASE GIV ME WORK.
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
    ({style, key}) => {
        return (
            <ConsoleContent className="skills" style={style} key={key}>
                <SectionTitle>
                    <h2>Skills</h2>
                    <span>many cause I'm smart 🤓</span>
                    <button>Sort</button>
                </SectionTitle>
                <WorkSkills />
            </ConsoleContent>
        );
    },
];

export default Home;
