import React from 'react';
import {HeaderContainer} from '../header/header.container';
import {ConsoleContainer} from '../console/console.container';
import {Social} from '../../components/social/social.component';
import {useWheelPager} from './wheel-pager.hook';
import {useDocumentTitle} from './document-title.hook';
import {useLoading} from './loading.hook';
import {Container} from './styled/container.styled';
import {Cover} from './styled/cover.styled';
import {LoadingWrapper} from './styled/loading-wrapper.styled';

// assets
import pages from '../../assets/pages.json5';
import networks from '../../assets/networks.json5';

export function HomeContainer () {
    const loading = useLoading();
    const activePage = useWheelPager(pages.length);

    useDocumentTitle(pages[activePage].browserTitle);

    return (
        <Container>
            <Cover loading={loading} />
            <LoadingWrapper loading={loading}>
                <HeaderContainer activePage={activePage} pages={pages} />
                <ConsoleContainer activePage={activePage} />
                <Social networks={networks} />
            </LoadingWrapper>
        </Container>
    );
}
