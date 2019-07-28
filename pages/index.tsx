import React, {useEffect} from 'react';
import {ConsoleContent} from '../src/components/ConsoleContent.styled';
import {PageContent} from '../src/components/DefaultLayout/components/PageContent.styled';
import {SectionTitle} from '../src/components/SectionTitle.styled';
import {WorkExperience} from '../src/components/WorkExperience/WorkExperience';
import {WorkSkills} from '../src/components/WorkSkills/components/WorkSkills';
import {PageComponent} from '../src/types/PageComponent';
import {SideImage} from '../src/components/SideImage';
/* eslint-disable react/no-unescaped-entities */

const Home: PageComponent = ({setChildren, styles}) => {
    return (
        <PageContent>
            <ConsoleContent className="experience" style={styles[0]}>
                <SectionTitle>
                    <h2>Experience</h2>
                    <span>not many cause I'm loyal</span>
                </SectionTitle>
                <WorkExperience />
            </ConsoleContent>
            <ConsoleContent className="skills" style={styles[1]}>
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
    </SideImage>
);

export default Home;
