import React from 'react';
import {PageComponent} from '../types/PageComponent';
import {PageContent} from '../components/DefaultLayout/components/PageContent.styled';
import {ConsoleContent} from '../components/ConsoleContent.styled';
import {SectionTitle} from '../components/SectionTitle.styled';
import {WorkExperience} from '../components/WorkExperience';
import {WorkSkills} from '../components/WorkSkills';
import {SideImage} from '../components/SideImage';
import {useToggle} from '../hooks/useToggle';

/* eslint-disable react/no-unescaped-entities */

const Home: PageComponent = ({style}) => {
    const [sorted, setSorted] = useToggle(false);

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
                    <span onClick={setSorted as any}>Sort</span>
                </SectionTitle>
                <WorkSkills sorted={sorted} />
            </ConsoleContent>
            <ConsoleContent className="soft-skills">
                <SectionTitle>
                    <h2>soft skills</h2>
                    <span>non-technical</span>
                </SectionTitle>
            </ConsoleContent>
        </PageContent>
    );
};

Home.displayName = 'home-page';
Home.index = 1;
Home.headerComponent = ({imageStyle, contentStyle, style}) => (
    <SideImage overlap={true} imageSrc="/static/me.png" imageStyle={imageStyle} contentStyle={contentStyle} style={style}>
        <SectionTitle>
            <h2>About</h2>
        </SectionTitle>
        <p>
            Primarily, I would call myself a web developer - most of the things I build live on the web in some form or another. Thought I
            would say I’m equally experienced in both front- and back-end development, I prefer the front-end - it reminds me of putting
            Lego blocks together, with added fanciness and animations.
        </p>
        <p>
            In my free time (when I’m not building something for fun) I enjoy gaming, cycling, hiking and other activities that require
            little to no talent.
        </p>
    </SideImage>
);

export default Home;
