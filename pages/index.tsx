import React, {FunctionComponent} from 'react';
import {ExternalLink} from '../src/components/external-link/external-link';
import {ImageDivisor} from '../src/components/image-divisor/image-divisor';
import {useExactAge} from '../src/hooks/useExactAge';
import {GITHUB_URL, LINKEDIN_URL} from '../src/social.constants';
import {SPACER_BIG} from '../src/style.contants';
import styled from 'styled-components/macro';

const Test = styled('div')`
    > :not(:first-child) {
        margin-top: ${SPACER_BIG}px;
    }
`;

const Home: FunctionComponent = () => {
    const age = useExactAge(new Date('1994-03-08T04:45:00.000Z'), 3);

    return (
        <Test>
            <ImageDivisor imageSrc="/static/me.png" overlap={true}>
                <h1>who am i</h1>
                <p>
                    Im Gregor, a web developer from Slovenia, where Ive been living for the past <strong>{age}</strong> years! Programming
                    is something that I really enjoy, so I decided to create this website, where Ill showcase some of my work.
                </p>
                <p>
                    If you want to know more about me, feel free to check out my <ExternalLink href={GITHUB_URL}>Github</ExternalLink>, or
                    contact me via <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>.
                </p>
            </ImageDivisor>
            <ImageDivisor imageSrc="/static/me.png" direction="right" overlap={true}>
                <h1>who am i</h1>
                <p>
                    Im Gregor, a web developer from Slovenia, where Ive been living for the past <strong>{age}</strong> years! Programming
                    is something that I really enjoy, so I decided to create this website, where Ill showcase some of my work.
                </p>
                <p>
                    If you want to know more about me, feel free to check out my <ExternalLink href={GITHUB_URL}>Github</ExternalLink>, or
                    contact me via <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>.
                </p>
            </ImageDivisor>
        </Test>
    );
};

Home.displayName = 'home';

export default Home;
