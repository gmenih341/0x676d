import React from 'react';
import {PageComponent} from '../types/PageComponent';
import {PageContent} from '../components/DefaultLayout/components/PageContent.styled';
import {ConsoleContent} from '../components/ConsoleContent.styled';
import {SectionTitle} from '../components/SectionTitle.styled';
import {WorkExperience} from '../components/WorkExperience';
import {WorkSkills} from '../components/WorkSkills';
import {SideImage} from '../components/SideImage';

/* eslint-disable react/no-unescaped-entities */

const Home: PageComponent = ({style}) => {
    return (
        <PageContent style={style}>
            <ConsoleContent className="experience">
                <SectionTitle>
                    <h2>Experience</h2>
                    <span>not many cause I'm loyal</span>
                </SectionTitle>
                <WorkExperience />
            </ConsoleContent>
            <ConsoleContent className="skills">
                <SectionTitle>
                    <h2>Skills</h2>
                    <span>many cause I'm smart 🤓</span>
                    <button>Sort</button>
                </SectionTitle>
                <WorkSkills />
            </ConsoleContent>
        </PageContent>
    );
};

Home.displayName = 'home-page';
Home.headerComponent = ({imageStyle, contentStyle, style}) => (
    <SideImage overlap={true} imageSrc="/static/me.png" imageStyle={imageStyle} contentStyle={contentStyle} style={style}>
        <SectionTitle>
            <h2>About</h2>
        </SectionTitle>
        <p>
            My name is Gregor, and I'm a full-stack web developer from Slovenia. I have a solid understanding of web development and it's
            accompanying technologies, all the way from <code>HTML</code> to <code>SQL</code>.
            <br />I hav
        </p>
        <p>
            a<br />b
        </p>
    </SideImage>
);

export default Home;
