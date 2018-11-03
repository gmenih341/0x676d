import React, {useState, useLayoutEffect, useEffect} from 'react';
import {HeaderContainer} from '../header/header.container';
import {ConsoleContainer} from '../console/console.container';
import {Social} from '../../components/social/social.component';
import {debounce} from '../../utils/function.utils';
import pages from '../../assets/pages.json5';
import networks from '../../assets/networks.json5';
import './home.container.scss';

const SCROLL_BREAKPOINT = 10;

export function HomeContainer () {
    const [loading, setLoading] = useState(true);
    const activePage = useWindowWheel(pages.length);
    useBrowserTitleAndHistory(pages, activePage);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    });

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

function useWindowWheel (maxPage) {
    const [stateActivePage, setActivePage] = useState(0);
    let activePage = 0;
    let sumScroll = 0;
    let breakpointModifier = 1;

    const onWheelEnd = debounce(() => {
        sumScroll = 0;
        breakpointModifier = 1;
    }, 77);

    const wheelHandler = event => {
        const {deltaY} = event;
        sumScroll += deltaY;

        if (Math.abs(sumScroll) > SCROLL_BREAKPOINT * breakpointModifier) {
            const nextPage = sumScroll > 0 ? activePage + 1 : activePage - 1;
            sumScroll = 0;
            breakpointModifier += 200;
            if (nextPage >= 0 && nextPage < maxPage) {
                activePage = nextPage;
                setActivePage(nextPage);
            }
        }
        onWheelEnd();
    };

    useLayoutEffect(() => {
        window.addEventListener('wheel', wheelHandler);
        return () => {
            window.removeEventListener('wheel', wheelHandler);
        };
    }, []);

    return stateActivePage;
}

function useBrowserTitleAndHistory (pages, activePage) {
    useEffect(
        () => {
            const page = pages[activePage];
            const title = `Gregor Menih / ${page.browserTitle}`;
            document.title = title;
        },
        [activePage],
    );
}
