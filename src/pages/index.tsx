import React, {useEffect} from 'react';
import {ConsoleContent} from '../components/ConsoleContent.styled';
import {PageContent} from '../components/DefaultLayout/components/PageContent.styled';
import {ExternalLink} from '../components/ExternalLink';
import {SectionTitle} from '../components/SectionTitle.styled';
import {SideImage} from '../components/SideImage';
import {WorkExperience} from '../components/WorkExperience';
import {WorkSkills} from '../components/WorkSkills';
import {useToggle} from '../hooks/useToggle';
import {PageComponent} from '../types/PageComponent';
import {ImageSet, MimeType} from '../types/ImageMime';

/* eslint-disable react/no-unescaped-entities */

const Home: PageComponent = ({style}) => {
    const [sorted, setSorted] = useToggle();
    const [runAnime, toggleAnime] = useToggle(true);

    useEffect(() => {
        let timeout;
        if (runAnime) {
            timeout = setTimeout(() => setSorted(!sorted), 5000);
        }

        return () => clearTimeout(timeout);
    }, [sorted, runAnime]);

    return (
        <PageContent style={style}>
            <ConsoleContent className="experience">
                <SectionTitle>
                    <h2>Experience</h2>
                    <span>places I've worked</span>
                </SectionTitle>
                <WorkExperience />
            </ConsoleContent>
            <ConsoleContent
                className="skills"
                onClick={() => toggleAnime()}
                onMouseEnter={() => toggleAnime(false)}
                onMouseLeave={() => toggleAnime(true)}>
                <SectionTitle>
                    <h2>Skills</h2>
                    <span>things I've learned</span>
                </SectionTitle>
                <WorkSkills sorted={sorted} />
            </ConsoleContent>
        </PageContent>
    );
};

const homePageImages: ImageSet = {
    [MimeType.PNG]: '/static/me.png',
    [MimeType.WEBP]: '/static/me.webp',
};
Home.displayName = 'home-page';
Home.index = 1;
Home.headerComponent = ({imageStyle, contentStyle, style}) => (
    <SideImage overlap={true} alt="My face" imageSet={homePageImages} imageStyle={imageStyle} contentStyle={contentStyle} style={style}>
        <SectionTitle>
            <h2>About</h2>
        </SectionTitle>
        <p>
            An experienced full-stack web developer with a great understanding of the web development process, and it's accompanying
            technologies. Most of the stacks I've worked on have been dominated by JavaScript, so I feel most at home there, but I like to
            try the latest cutting edge technology, so I'm familiar with many other languages as well.
            <br />
            This website serves as my CV - if you would like to find out how I build it, you can find the source{' '}
            <ExternalLink href="https://github.com/gmenih341/0x676d">on GitHub</ExternalLink>.
        </p>
        <p>In my free time I enjoy gaming, cycling, hiking, and other similar activities, that require no talent.</p>
    </SideImage>
);

export default Home;
