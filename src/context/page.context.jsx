import React, {createContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useScrollingPage} from '../hooks/scrolling-page.hook';
import pages from '../assets/pages.json5';

export const PageContext = createContext();

export function PageContextProvider ({children}) {
    const [page, setPage] = useScrollingPage(pages.length, {duration: 300});
    useBrowserTitle(`${pages[page].title} / ${pages[page].browserTitle}`, [page]);
    return (
        <PageContext.Provider
            value={{
                pages,
                page,
                setPage,
            }}>
            {children}
        </PageContext.Provider>
    );
}

PageContextProvider.propTypes = {
    children: PropTypes.node,
};

function useBrowserTitle (title, props) {
    useEffect(() => {
        document.title = title;
    }, props);
}
