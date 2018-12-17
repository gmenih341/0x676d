import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';
import {Header} from './header/header.component';
import {Footer} from './footer/footer.component';
import {Terminal} from './terminal/terminal.component';
import {mediaMin} from '../utils/style.utils';
import {SPACER, COLOR_WHITE} from '../style.contants';
import {useScrollingPage} from '../hooks/scrolling-page.hook';
import pages from '../assets/pages.json5';

const globalStyle = css`
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        position: relative;
        overflow: hidden;
    }
    #root {
        background-color: ${COLOR_WHITE};
    }
`;

const AppContainer = styled.div`
    font-family: Fira Sans, Arial, Helvetica, sans-serif;
    display: grid;
    position: relative;
    grid-template-rows: 200px 1fr 50px;
    grid-gap: ${SPACER}px;
    height: 100%;
    margin: 0 ${SPACER}px;
    padding: ${SPACER}px 0;
    box-sizing: border-box;

    ${mediaMin('sm')} {
        width: 570px;
        margin: 0 auto;
    }

    ${mediaMin('md')} {
        width: 760px;
    }

    ${mediaMin('lg')} {
        width: 980px;
    }

    ${mediaMin('xl')} {
        width: 1140px;
    }
`;

export function App () {
    const page = useScrollingPage(pages.length, {duration: 300});
    useBrowserTitle(`${pages[page].title} / ${pages[page].browserTitle}`, [page]);
    return (
        <AppContainer>
            <Global styles={globalStyle} />
            <Header pages={pages} activePage={page} />
            <Terminal pages={pages} activePage={page} />
            <Footer />
        </AppContainer>
    );
}

function useBrowserTitle (title, props) {
    useEffect(() => {
        document.title = title;
    }, props);
}
