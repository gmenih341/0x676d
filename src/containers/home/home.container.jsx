import React from 'react';
import {HeaderContainer} from '../header/header.container';
import {ConsoleContainer} from '../console/console.container';
import {Social} from '../../components/social/social.component';
import {useWheelPager} from './wheel-pager.hook';
import {useDocumentTitle} from './document-title.hook';
import {Container} from './styled/container.styled';

// assets
import pages from '../../assets/pages.json5';
import networks from '../../assets/networks.json5';

export function HomeContainer () {
    const [activePage, firstChange] = useWheelPager(pages.length);

    useDocumentTitle(pages[activePage].browserTitle);

    return (
        <Container>
            <HeaderContainer activePage={activePage} pages={pages} />
            <ConsoleContainer activePage={activePage} showIndicator={!firstChange} />
            <Social networks={networks} />
        </Container>
    );
}
