import React from 'react';
import cn from 'classnames';
import {HeaderContainer} from '../header/header.container';
import {ConsoleContainer} from '../console/console.container';
import {Social} from '../../components/social/social.component';
import {useWheelPager} from './wheel-pager.hook';
import {useDocumentTitle} from './document-title.hook';
import {useLoading} from './loading.hook';
import * as css from './home.styles';

// assets
import pages from '../../assets/pages.json5';
import networks from '../../assets/networks.json5';

export function HomeContainer () {
    const loading = useLoading();
    const activePage = useWheelPager(pages.length);

    useDocumentTitle(pages[activePage].browserTitle);

    return (
        <div
            className={cn({
                [css.homeContainer]: true,
                [css.loading]: loading,
            })}>
            <div className={css.cover} />
            <div className={css.loadingWrapper}>
                <HeaderContainer activePage={activePage} pages={pages} />
                <ConsoleContainer activePage={activePage} />
                <Social networks={networks} />
            </div>
        </div>
    );
}
