import React from 'react';
import {HeaderContainer} from '../header/header.container';
import {ConsoleContainer} from '../console/console.container';
import {Social} from '../../components/social/social.component';
import {useWheelPager} from './wheel-pager.hook';
import {useDocumentTitle} from './document-title.hook';
import {useLoading} from './loading.hook';

// assets
import pages from '../../assets/pages.json5';
import networks from '../../assets/networks.json5';
import './home.container.scss';

export function HomeContainer () {
    const loading = useLoading();
    const activePage = useWheelPager(pages.length);

    useDocumentTitle(pages[activePage].browserTitle);

    return (
        <div className={'home-container' + (loading ? ' loading' : '')}>
            <div className="yellow-cover" />
            <div className="loading-wrapper">
                <HeaderContainer activePage={activePage} pages={pages} />
                <ConsoleContainer activePage={activePage} />
                <Social networks={networks} />
            </div>
        </div>
    );
}
